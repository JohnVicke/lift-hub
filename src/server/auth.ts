import { DrizzleAdapter } from "@auth/drizzle-adapter";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import { type Adapter } from "next-auth/adapters";
import { db } from "~/server/db";
import GoogleProvider from "next-auth/providers/google";
import { env } from "~/env";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      role?: string;
    } & DefaultSession["user"];
  }

  interface User {
    role?: string;
  }
}

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth",
    signOut: "/auth",
    error: "/auth/error",
    verifyRequest: "/auth/verify-request",
    newUser: "/auth/new-user",
  },
  callbacks: {
    session: async ({ session, user, trigger }) => {
      let role;

      if (trigger === "update") {
        const dbRole = await db.query.users.findFirst({
          where: (dbUser, { eq }) => eq(dbUser.id, user.id),
          columns: { role: true },
        });
        console.log(dbRole);

        role = dbRole?.role;
      }

      const sesh = {
        ...session,
        user: {
          ...session.user,
          id: user.id,
          role,
        },
      };

      console.log({ sesh });

      return sesh;
    },
  },
  adapter: DrizzleAdapter(db) as Adapter,
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  ],
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
