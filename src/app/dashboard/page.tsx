import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function DashboardPage() {
  let session = null;
  let error = null;
  try {
    session = await auth.api.getSession({ headers: await headers() });
  } catch (e) {
    console.error('Erreur récupération session:', e);
    error = 'Erreur lors de la récupération de la session utilisateur.';
  }
  if (!session?.user) {
    redirect("/signin");
  }

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <header className="flex items-center justify-between bg-blue-600 text-white rounded-t-lg px-6 py-4 shadow">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <span className="text-sm font-medium">{session.user.name || session.user.email}</span>
      </header>
      <div className="bg-white dark:bg-neutral-900 rounded-b-lg shadow px-6 py-8 border border-t-0 border-neutral-200 dark:border-neutral-800">
        {error && <div className="mb-4 text-red-500">{error}</div>}
        <p className="mb-4 text-lg">Welcome, {session.user.email}!</p>
        <pre className="bg-neutral-100 dark:bg-neutral-800 rounded p-4 text-xs overflow-x-auto">
          {JSON.stringify(session.user, null, 2)}
        </pre>
      </div>
    </div>
  );
}
