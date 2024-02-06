import Link from "next/link";
import { cn } from "~/lib/utils";

export function Navbar(props: { className?: string }) {
  return (
    <nav className={cn("h-14 w-full border-b bg-slate-950", props.className)}>
      <ul>
        <Link href="/profile">Profile</Link>
      </ul>
    </nav>
  );
}
