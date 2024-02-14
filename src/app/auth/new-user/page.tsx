import { redirect } from "next/navigation";
import { NewUser } from "~/features/auth/new-user";
import { getServerAuthSession } from "~/server/auth";

export default async function Page() {
  const session = await getServerAuthSession();
  if (!session?.user) {
    redirect("/auth");
  }
  return <NewUser />;
}
