"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await authClient.signUp.email(
      {
        email,
        password,
        name,
        image,
        callbackURL: "/dashboard",
      },
      {
        onRequest: (ctx) => {
          setLoading(true);
        },
        onSuccess: (ctx) => {
          setLoading(false);
          router.push("/dashboard");
        },
        onError: (ctx) => {
          setLoading(false);
          alert(ctx.error.message);
        },
      }
    );
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
      <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name (optional)" />
      <input type="text" value={image} onChange={e => setImage(e.target.value)} placeholder="Image URL (optional)" />
      <button type="submit" disabled={loading}>{loading ? "Signing Up..." : "Sign Up"}</button>
    </form>
  );
}
