import { getServerSession } from "next-auth";

export default async function ServerActionPage() {
  const whoIsLoggedIn = async () => {
    "use server";
    const session = await getServerSession();
    return session?.user?.name || "Guest";
  };
}

// https://www.youtube.com/watch?v=md65iBX5Gxg
