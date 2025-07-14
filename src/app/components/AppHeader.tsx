import { Suspense } from "react";
import UserHeader from "../user-header";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function AppHeader() {
  return (
    <header className="w-full flex justify-between items-center py-4 px-2 sm:px-8 bg-blue-600 text-white shadow-md">
      <span className="text-xl font-bold tracking-tight">Better Auth App</span>
      <Suspense fallback={<Skeleton width={120} height={32} baseColor="#2563eb" highlightColor="#3b82f6" borderRadius={8} />}>
        <UserHeader />
      </Suspense>
    </header>
  );
}
