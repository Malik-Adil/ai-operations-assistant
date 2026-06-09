export interface CurrentUser {
  id: string;
  email: string;
  name: string | null;
  avatar: string | null;
  provider: string | null;
}

/**
 * Temporary placeholder returning a mocked user.
 * Replace with real session/API call when backend is implemented.
 */
export function getCurrentUser(): CurrentUser | null {
  return {
    id: "user-mock-1",
    email: "john@acme.com",
    name: "John Smith",
    avatar: null,
    provider: "google",
  };
}
