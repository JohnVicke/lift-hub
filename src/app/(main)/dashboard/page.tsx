import { redirect } from "next/navigation";
import { validateRequest } from "~/server/auth";

export default async function Page() {
  const { user } = await validateRequest();

  if (!user) {
    return redirect("/auth");
  }

  return <div>coach dashboard</div>;
}
