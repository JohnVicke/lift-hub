import { SsoForm } from "./sso-form";
import { OauthProviders } from "./oauth-providers";
import { CredentialsForm } from "./credentials-form";
import Link from "next/link";

export function Auth() {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-2 pb-8">
        <h1 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Log in to LiftHub
        </h1>
        <p>
          Don&apos;t have an account?{" "}
          <Link href="/auth/signup" className="text-blue-400 hover:underline">
            Sign up.
          </Link>
        </p>
      </div>
      <CredentialsForm />
      <p className="my-4 shrink-0 px-2 text-center text-muted-foreground">or</p>
      <OauthProviders />
      <SsoForm />
    </div>
  );
}
