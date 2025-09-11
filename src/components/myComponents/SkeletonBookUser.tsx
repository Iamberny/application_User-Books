import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonUserCard() {
  return (
    <div className="w-60 h-80 max-w-sm mt-25 ml-10 border rounded-lg shadow-lg p-4 flex flex-col items-center">
      <div className="relative w-28 h-28 mb-2">
        <Skeleton className="w-28 h-28 rounded-full -mt-20 absolute top-0 left-1/2 transform -translate-x-1/2" />
      </div>

      <div className="w-full text-center space-y-2 -mt-10">
        <Skeleton className="h-5 w-32 mx-auto rounded-md" />
        <Skeleton className="h-4 w-40 mx-auto rounded-md" />
        <Skeleton className="h-4 w-24 mx-auto rounded-md mt-4" />

        <Skeleton className="h-8 w-16 mx-auto rounded-md mt-1" />
      </div>

      <div className="mt-5">
        <Skeleton className="h-10 w-40 rounded-3xl mt-4" />
      </div>
    </div>
  );
}

export function SkeletonBookCard() {
  return (
    <div className="w-60 h-80 max-w-sm mt-25 ml-10 border rounded-lg shadow-lg p-4 flex flex-col items-center">
 
      <div className="relative flex justify-center -mt-10">
        <div className="w-28 h-36 bg-white absolute top-0 left-1/2 transform -translate-x-1/2 shadow-md border rounded-md -mt-9" />
        <Skeleton className="w-28 h-36 relative -mt-7 rounded-md" />
      </div>

 
      <div className="text-center mt-4 px-6 space-y-3 w-full">
        <Skeleton className="h-5 w-32 mx-auto rounded-md" />{" "}
     
        <Skeleton className="h-4 w-40 mx-auto rounded-md" /> 
        <Skeleton className="h-4 w-24 mx-auto rounded-md mt-4" />{" "}
     
        <Skeleton className="h-8 w-16 mx-auto rounded-md mt-1" /> 
      </div>

   
      <div className="text-center mt-5 px-6 flex justify-center gap-2 text-sm">
        <Skeleton className="h-10 w-24 rounded-3xl" />
        <Skeleton className="h-10 w-24 rounded-3xl" /> 
      </div>
    </div>
  );
}
