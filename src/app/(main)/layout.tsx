import type { User } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { AthleteLayout } from "~/features/athlete/athlete-layout";
import { CoachLayout } from "~/features/coach/coach-layout";
import { getServerAuthSession } from "~/server/auth";

const isSignupComplete = (user: User) => {
  return user.name && user.role && user.email;
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerAuthSession();

  if (!session?.user) {
    redirect("/auth");
  }

  if (!isSignupComplete(session.user)) {
    redirect("/auth/new-user");
  }

  const Layout = session.user.role === "coach" ? CoachLayout : AthleteLayout;

  return <Layout>{children}</Layout>;
}
