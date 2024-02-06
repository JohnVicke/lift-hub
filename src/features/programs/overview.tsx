import Link from "next/link";
import { Button } from "~/components/ui/button";

export function ProgramsOverview() {
  return (
    <div>
      <Button asChild>
        <Link href="/programs/new">Create program</Link>
      </Button>
    </div>
  );
}
