import { ClerkProvider, useAuth as useClerkAuth } from "@clerk/clerk-react";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!publishableKey) {
  throw new Error("Missing Publishable Key");
}

export function AuthProvider({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider publishableKey={publishableKey}>
      {children}
    </ClerkProvider>
  );
}

export function useAuth() {
  const { isSignedIn, isLoaded, userId } = useClerkAuth();
  
  return {
    isAuthenticated: isSignedIn,
    isLoading: !isLoaded,
    userId
  };
}
