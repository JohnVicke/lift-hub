import { generateCodeVerifier, generateState } from "arctic";
import { cookies } from "next/headers";
import { env } from "~/env";
import { google } from "~/server/auth";

export async function GET(_request: Request): Promise<Response> {
  const state = generateState();
  const verifier = generateCodeVerifier();
  const url = await google.createAuthorizationURL(state, verifier, {
    scopes: ["profile", "email"],
  });

  cookies().set("google_oauth_verifier", verifier, {
    path: "/",
    secure: env.NODE_ENV === "production",
    httpOnly: true,
    maxAge: 60 * 10,
    sameSite: "lax",
  });

  cookies().set("google_oauth_state", state, {
    path: "/",
    secure: env.NODE_ENV === "production",
    httpOnly: true,
    maxAge: 60 * 10,
    sameSite: "lax",
  });

  return Response.redirect(url);
}
