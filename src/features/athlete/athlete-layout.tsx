import { MenuIcon } from "lucide-react";
import React from "react";
import { TeamSwitcher } from "~/components/layout/account-switcher";
import { CommandKSearch } from "~/components/layout/command-k-search";
import { MainNav } from "~/components/layout/main-nav";
import { UserNav } from "~/components/layout/user-nav";

export function AthleteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <TeamSwitcher />
            <MainNav
              items={[
                {
                  href: "/program",
                  label: "Program",
                },
              ]}
              className="mx-6"
            />
            <div className="ml-auto flex items-center space-x-4">
              <CommandKSearch />
              <UserNav />
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:hidden">
        <div className="flex-1 border-b">
          <div className="flex h-16">
            <MenuIcon className="m-4 ml-auto h-6 w-6" />
          </div>
        </div>
      </div>
      <div className="flex-1 p-8 pt-6">{children}</div>
    </>
  );
}
