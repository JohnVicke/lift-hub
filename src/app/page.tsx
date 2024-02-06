import Link from "next/link";
import { Button } from "~/components/ui/button";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-background to-background-purple text-white">
      <h1>powerlift</h1>
      <Button asChild>
        <Link href="/auth">Sign in</Link>
      </Button>
    </main>
  );
}
