import { buttonVariants } from "~/components/ui/button";
import { Apple, Google } from "~/components/ui/icon";
import { cn } from "~/lib/utils";

export function OauthProviders() {
  return (
    <div className="flex flex-1 gap-x-4">
      <a
        href="/api/auth/google"
        className={cn(buttonVariants(), "inline-flex flex-1 gap-2")}
      >
        <Google className="h-4 w-4" />
        Login with Google
      </a>
      <a
        className={cn(buttonVariants(), "inline-flex flex-1 gap-2")}
        href="/api/auth/apple"
      >
        <Apple className="h-4 w-4" />
        Login with Apple
      </a>
    </div>
  );
}
