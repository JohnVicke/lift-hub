import React from "react";
import { AthleteLayout } from "~/features/athlete/athlete-layout";
import { CoachLayout } from "~/features/coach/coach-layout";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const Layout = "" === "coach" ? CoachLayout : AthleteLayout;

  return <Layout>{children}</Layout>;
}
