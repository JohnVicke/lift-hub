import { cookies } from "next/headers";
import { generateId } from "lucia";
import { google, lucia } from "~/server/auth";
import { db, schema } from "~/server/db";

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");

  const storedState = cookies().get("google_oauth_state")?.value ?? null;
  const storedVerifier = cookies().get("google_oauth_verifier")?.value ?? null;

  if (
    !storedVerifier ||
    !code ||
    !state ||
    !storedState ||
    state !== storedState
  ) {
    return new Response(null, {
      status: 400,
    });
  }

  try {
    const tokens = await google.validateAuthorizationCode(code, storedVerifier);
    const userResponse = await fetch(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      {
        headers: {
          Authorization: `Bearer ${tokens.accessToken}`,
        },
      },
    );

    const user = (await userResponse.json()) as GoogleUserInfo;

    const getDbUser = async () => {
      const existingUser = await db.query.users.findFirst({
        where: (dbUser, { eq }) => eq(dbUser.email, user.email),
      });
      if (existingUser) {
        return existingUser;
      }

      const id = generateId(15);

      const newUser = await db
        .insert(schema.users)
        .values({
          id,
          email: user.email,
          emailVerified: user.email_verified,
        })
        .returning();

      if (!newUser[0]) {
        throw new Error("Failed to create user");
      }

      return newUser[0];
    };

    const dbUser = await getDbUser();

    const session = await lucia.createSession(dbUser.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes,
    );

    return new Response(null, {
      status: 302,
      headers: {
        Location: "/dashboard",
      },
    });
  } catch (error) {
    console.log(error);
    return new Response(null, {
      status: 500,
    });
  }
}

interface GoogleUserInfo {
  aud: string;
  azp: string;
  email: string;
  email_verified: boolean;
  exp: number;
  family_name?: string;
  given_name: string;
  hd?: string;
  iat: number;
  iss: string;
  jti?: string;
  locale?: string;
  name: string;
  nbf?: number;
  picture: string;
  sub: string;
}
