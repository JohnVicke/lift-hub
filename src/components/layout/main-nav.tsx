import Link from "next/link";

import { cn } from "~/lib/utils";

interface NavItem {
  href: string;
  label: string;
}

interface MainNavProps {
  className?: string;
  items: NavItem[];
}

export function MainNav({
  className,
  items,
}: React.PropsWithChildren<MainNavProps>) {
  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
      {items.map((item) => {
        const isActive = false;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
              isActive && "text-primary",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
