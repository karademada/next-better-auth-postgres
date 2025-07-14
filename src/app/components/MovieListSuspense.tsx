import { Suspense } from "react";
import MovieSkeleton from "./MovieSkeleton";

export default function MovieListSuspense({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<MovieSkeleton />}>{children}</Suspense>
  );
}
