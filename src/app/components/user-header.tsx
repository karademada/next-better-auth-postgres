"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";

export default function UserHeader() {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchUser()
  }, []);

  const fetchUser = async () => {
    const session = await authClient.getSession();
    setUser(session?.data?.user || null);
  };

  const handleSignOut = async () => {
    setLoading(true);
    setError(null);
    try {
      const { error: signOutError, data } = await authClient.signOut({
        fetchOptions: {
          onError: (err) => {
            setLoading(false);
            setError("Erreur lors de la déconnexion.");
            console.error("Logout failed:", err);
          },
        },
      });
      if (signOutError) {
        setError(signOutError.message || "Erreur lors de la déconnexion.");
      }
      setUser(null);
      router.push("/signin");
    } catch (err) {
      setError("Erreur lors de la déconnexion.");
    } finally {
      setLoading(false);
    }
  };

  // While loading user state, render nothing to avoid flicker
  if (user === undefined) return null;

  return (
    <div className="flex gap-4 items-center">
      {user ? (
        <>
          <span className="text-sm">Hello, {user.name || user.email}</span>
          {user.image && (
            <img
              src={user.image}
              alt="User avatar"
              className="w-8 h-8 rounded-full"
            />
          )}
          <Link href="/dashboard" className="underline">
            Dashboard
          </Link>
          <button
            type="button"
            className="ml-2 underline"
            onClick={handleSignOut}
            disabled={loading}
          >
            {loading ? "Signing out..." : "Sign out"}
          </button>
          {error && <span className="ml-2 text-xs text-red-300">{error}</span>}
        </>
      ) : (
        <>
          <Link href="/signin" className="underline">
            Sign In
          </Link>
          <Link href="/signup" className="ml-2 underline">
            Sign Up
          </Link>
          {error && <span className="ml-2 text-xs text-red-300">{error}</span>}
        </>
      )}
    </div>
  );
}
