import { useBooks } from "@/hooks/useBooks";
import { MyCardBook } from "@/components/myComponents/myCardBook";
import { SkeletonBookCard } from "@/components/myComponents/mySkeleton";

export function MyBookDashboard() {
  const { data: books, isLoading } = useBooks();

  if (isLoading)
    return (
      <div className="flex flex-wrap mt-6 gap-6 ml-8 mb-5">
        {Array.from({ length: 6 }).map((_, idx) => (
          <SkeletonBookCard key={idx} />
        ))}
      </div>
    );

  return (
    <div className="flex flex-wrap mt-6 gap-6 ml-8 mb-5">
      {books?.map((book: any) => (
        <MyCardBook key={book.id} book={book} />
      ))}
    </div>
  );
}
 