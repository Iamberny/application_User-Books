import { bookType } from "@/types/bookType";
import { CardBook } from "@/components/modified_components/CardBook";
import { SkeletonBookCard } from "@/components/modified_components/SkeletonBookUser";
import { useBooks } from "@/hooks/useBooks";

interface MyBookDashboardProps {
  query: string;
}

export function BookDashboard({ query }: MyBookDashboardProps) {
  const { data: books, isLoading } = useBooks();

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

  const filteredBooks = books?.filter((book: bookType) =>
    book.name.toLowerCase().includes(search)
  );

  if (!filteredBooks || filteredBooks.length === 0) {
    return (
      <div className="flex justify-center items-center mt-6 ml-8 mb-5 h-48">
        <p className="text-gray-500 italic">
          {query
            ? `No books found for "${query}"`
            : "No books available at the moment."}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap mt-6 gap-6 ml-8 mb-5">
      {filteredBooks.map((book: bookType) => (
        <CardBook key={book.id} book={book} />
      ))}
    </div>
  );
}
