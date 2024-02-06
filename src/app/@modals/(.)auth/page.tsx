import {
  DialogDescription,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { Auth } from "~/features/auth";

export default function AuthModal() {
  return (
    <Dialog open>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sign in / up</DialogTitle>
          <DialogDescription>
            Sign in or sign up to continue using powerlift.
          </DialogDescription>
        </DialogHeader>
        <Auth />
      </DialogContent>
    </Dialog>
  );
}
