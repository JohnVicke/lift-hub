import { redirect } from "next/navigation";
import React from "react";
import { Navbar } from "~/features/dashboard/navbar";
import { SideMenu } from "~/features/dashboard/sidemenu";
import { getServerAuthSession } from "~/server/auth";

export default async function DashboardLayout(props: React.PropsWithChildren) {
  const session = await getServerAuthSession();

  if (!session?.user) {
    redirect("/signin");
  }

  return (
    <div className="grid grid-cols-[320px_1fr]">
      <SideMenu className="sticky top-0 col-span-1 h-screen" />
      <div>
        <Navbar className="fixed top-0" />
        <main className="mx-4 mt-20 min-h-[calc(100vh-5rem)] bg-gradient-to-b from-background from-80% to-background-purple">
          {props.children}
        </main>
      </div>
    </div>
  );
}
