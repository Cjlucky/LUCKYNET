// Clerk configuration
export const clerkConfig = {
  publishableKey: 'pk_test_cmFyZS1seW54LTQxLmNsZXJrLmFjY291bnRzLmRldiQ=',
  frontendApi: 'rare-lynx-41.clerk.accounts.dev'
};

// Initialize Clerk
export function initializeClerk() {
  if (!clerkConfig.publishableKey) {
    console.error('Missing Clerk Publishable Key');
    return null;
  }
  return clerkConfig;
}
