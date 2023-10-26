export async function fetchSession(cookies: string) {
  try {
    const response = await fetch("http://localhost:3000/api/auth/session", {
      headers: {
        Accept: "application/json",
        Cookie: cookies,
      },
    });

    if (!response.ok) {
      throw new Error(`Fetch failed with status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching session:", error);
    throw error;
  }
}
