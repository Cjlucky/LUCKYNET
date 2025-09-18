import { UserButton as ClerkUserButton, useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export function UserButton() {
  const { isSignedIn } = useUser();

  if (!isSignedIn) {
    return null;
  }

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="sm"
        className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
        asChild
      >
        <a href="/profile">Profile</a>
      </Button>
      <div className="h-8 w-px bg-gray-200 dark:bg-gray-700" />
      <div className="flex items-center">
        <ClerkUserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              userButtonAvatarBox: 'h-8 w-8',
              userButtonTrigger: 'focus:shadow-none',
            },
          }}
        />
      </div>
    </div>
  );
}
