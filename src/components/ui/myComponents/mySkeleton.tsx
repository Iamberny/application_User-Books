import { Skeleton } from "../../skeleton";

export function SkeletonUserCard() {
  return (
    <div className="w-60 h-80 max-w-sm mt-25 ml-10 border rounded-lg shadow-lg p-4 flex flex-col items-center">
      {/* Cerchio avatar */}
      <div className="relative w-28 h-28 mb-2">
        <Skeleton className="w-28 h-28 rounded-full -mt-20 absolute top-0 left-1/2 transform -translate-x-1/2" />
      </div>

      {/* Testo */}
      <div className="w-full text-center space-y-2 -mt-10">
        <Skeleton className="h-5 w-32 mx-auto rounded-md" /> {/* nome */}
        <Skeleton className="h-4 w-40 mx-auto rounded-md" /> {/* createdAt */}
        <Skeleton className="h-4 w-24 mx-auto rounded-md mt-4" /> {/* label "User ID" */}
        <Skeleton className="h-8 w-16 mx-auto rounded-md mt-1" /> {/* id */}
      </div>

      {/* Bottone */}
      <div className="mt-5">
        <Skeleton className="h-10 w-40 rounded-3xl mt-4" />
      </div>
    </div>
  );
}
