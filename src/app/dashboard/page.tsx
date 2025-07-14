import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function DashboardPage() {
 const session = await auth.api.getSession({
        headers: await headers()
    })
  if (!session?.user) {
    redirect("/signin");
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {session.user.email}!</p>
      <pre>{JSON.stringify(session.user, null, 2)}</pre>
    </div>
  );
}
