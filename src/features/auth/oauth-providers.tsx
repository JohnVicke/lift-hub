"use client";

import { Button } from "~/components/ui/button";
import { Apple, Google } from "~/components/ui/icon";
import { signIn } from "next-auth/react";

export function OauthProviders() {
  return (
    <div className="flex flex-1 gap-x-4">
      <Button
        className="inline-flex flex-1 gap-2"
        onClick={() => signIn("google")}
      >
        <Google className="h-4 w-4" />
        Login with Google
      </Button>
      <Button
        className="inline-flex flex-1 gap-2"
        onClick={() => signIn("apple")}
      >
        <Apple className="h-4 w-4" />
        Login with Apple
      </Button>
    </div>
  );
}
