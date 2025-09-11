import { MyCardUser } from "@/components/myComponents/CardUser";
import { SkeletonUserCard } from "@/components/myComponents/SkeletonBookUser";
import { useUsers } from "@/hooks/useUsers";
import { useBooks } from "@/hooks/useBooks";
import { FilterValue } from "@/components/myComponents/FilterUser";

interface Props {
  filter?: FilterValue;
  query: string;
}

export function MyUserDashboard({ filter = "all", query }: Props) {
  const { data: users, isLoading: usersLoading } = useUsers();
  const { data: books, isLoading: booksLoading } = useBooks();

  const isLoading = usersLoading || booksLoading;

  if (isLoading) {
    return (
      <div className="flex flex-wrap mt-6 gap-6 ml-8 mb-5">
        {Array.from({ length: 6 }).map((_, idx) => (
          <SkeletonUserCard key={idx} />
        ))}
      </div>
    );
  }

  const usersWithBook = new Set(
    books?.map((book: any) => book.sellerId).filter(Boolean)
  );

  const filteredByType = users?.filter((user: any) => {
    if (filter === "withBooks")
      return usersWithBook.has(user.id) || !!user.booksId;
    if (filter === "withoutBooks")
      return !usersWithBook.has(user.id) && !user.booksId;
    return true;
  });

  const filteredUsers = filteredByType?.filter((user: any) =>
    user.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex flex-wrap mt-6 gap-6 ml-8 mb-5">
      {filteredUsers?.map((user: any) => (
        <MyCardUser key={user.id} user={user} />
      ))}
    </div>
  );
}
