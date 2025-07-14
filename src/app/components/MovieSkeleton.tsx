import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function MovieSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex flex-col bg-neutral-900 rounded-lg shadow p-4">
          <div className="flex justify-center mb-2">
            <Skeleton height={225} width={150} borderRadius={8} />
          </div>
          <Skeleton width={120} height={24} className="mb-1" />
          <Skeleton width={80} height={16} className="mb-2" />
          <Skeleton count={2} />
        </div>
      ))}
    </div>
  );
}
