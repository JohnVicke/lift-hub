import { cn } from "~/lib/utils";
import { DumbbellIcon, UsersIcon } from "lucide-react";
import { CommandKSearch } from "./command-k-search";
import Link from "next/link";

export function SideMenu(props: { className?: string }) {
  return (
    <div
      className={cn(
        "flex w-full flex-col gap-y-8 border-r px-2 py-8",
        props.className,
      )}
    >
      <CommandKSearch />
      <Link
        href="/programs"
        className="flex items-center gap-x-4 text-muted-foreground"
      >
        <DumbbellIcon />
        <span>Programs</span>
      </Link>
      <Link
        href="/programs"
        className="flex items-center gap-x-4 text-muted-foreground"
      >
        <UsersIcon />
        <span>Clients</span>
      </Link>
    </div>
  );
}
