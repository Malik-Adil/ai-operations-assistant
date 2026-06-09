const LOGOUT_URL = "http://localhost:4000/auth/logout";
const LOGIN_PATH = "/login";

/**
 * Calls the auth API to log out, then redirects to the login page.
 * Use when the frontend is served from a different origin than the API.
 */
export async function logout(): Promise<void> {
  try {
    const res = await fetch(LOGOUT_URL, {
      method: "POST",
      credentials: "include",
    });
    if (!res.ok) {
      console.error("Logout failed:", res.status);
    }
  } catch (err) {
    console.error("Logout request failed:", err);
  } finally {
    if (typeof window !== "undefined") {
      window.location.href = LOGIN_PATH;
    }
  }
}
