"use client";

import { Button } from "~/components/ui/button";
import { Apple, Google } from "~/components/ui/icon";
import { signIn } from "next-auth/react";

export function OauthProviders() {
  return (
    <div className="flex flex-1 gap-x-4">
      <Button className="flex-1" onClick={() => signIn("google")}>
        <Google className="h-6 w-6" />
      </Button>
      <Button className="flex-1" onClick={() => signIn("apple")}>
        <Apple className="h-6 w-6" />
      </Button>
    </div>
  );
}
