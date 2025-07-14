"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";

export default function UserHeader() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Fetch user session client-side
    authClient.getSession().then((session) => {
      setUser(session?.user || null);
    });
  }, []);

  const handleSignOut = async () => {
    setLoading(true);
    await authClient.signOut({
      fetchOptions: {
        onError: (err) => {
          setLoading(false);
          console.error("Logout failed:", err);
        },
      },
    });
    setLoading(false);
    setUser(null);
    router.push("/signin");
  };

  return (
    <div className="flex gap-4 items-center">
      {user ? (
        <>
          <span className="text-sm">
            Hello, {user.name || user.email}
          </span>
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
        </>
      ) : (
        <>
          <Link href="/signin" className="underline">
            Sign In
          </Link>
          <Link href="/signup" className="ml-2 underline">
            Sign Up
          </Link>
        </>
      )}
    </div>
  );
}
