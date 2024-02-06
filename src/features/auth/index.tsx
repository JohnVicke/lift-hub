import { EmailForm } from "./email-form";
import { OauthProviders } from "./oauth-providers";

export function Auth() {
  return (
    <div className="flex flex-col gap-y-4">
      <OauthProviders />
      <p className="my-4 shrink-0 px-2 text-center text-muted-foreground">
        or continue with
      </p>
      <EmailForm />
    </div>
  );
}
