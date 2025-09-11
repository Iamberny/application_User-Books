import { bookType } from "@/types/bookType";
import { MyCardBook } from "@/components/myComponents/CardBook";
import { SkeletonBookCard } from "@/components/myComponents/SkeletonBookUser";

interface MyBookDashboardProps {
  query: string;
  books: bookType[];
  isLoading: boolean;
}

export function MyBookDashboard({
  query,
  books,
  isLoading,
}: MyBookDashboardProps) {
  if (isLoading) {
    return (
      <div className="flex flex-wrap mt-6 gap-6 ml-8 mb-5">
        {Array.from({ length: 6 }).map((_, idx) => (
          <SkeletonBookCard key={idx} />
        ))}
      </div>
    );
  }

  const search = query.toLowerCase();

  const filteredBooks = books.filter((book) =>
    book.name.toLowerCase().includes(search)
  );

  return (
    <div className="flex flex-wrap mt-6 gap-6 ml-8 mb-5">
      {filteredBooks.map((book) => (
        <MyCardBook key={book.id} book={book} />
      ))}
    </div>
  );
}
