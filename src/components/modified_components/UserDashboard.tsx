import { CardUser } from "@/components/modified_components/CardUser";
import { SkeletonUserCard } from "@/components/modified_components/SkeletonBookUser";
import { useUsers } from "@/hooks/useUsers";
import { useBooks } from "@/hooks/useBooks";

import { userType } from "@/types/userType";
import { bookType } from "@/types/bookType";

import { FilterValue } from "@/components/modified_components/FilterUser";

interface Props {
  filter?: FilterValue;
  query: string;
}

export function UserDashboard({ filter = "all", query }: Props) {
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
    books?.map((book: bookType) => book.sellerId).filter(Boolean)
  );

  const filteredByType = users?.filter((user: userType) => {
    const hasArticles = user.articlesId && user.articlesId.length > 0;

    if (filter === "withBooks") {
      return usersWithBook.has(user.id) || hasArticles;
    }

    if (filter === "withoutBooks") {
      return !usersWithBook.has(user.id) && !hasArticles;
    }

    return true;
  });

  const filteredUsers = filteredByType?.filter((user: userType) =>
    user.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex flex-wrap mt-6 gap-6 ml-8 mb-5">
      {filteredUsers?.map((user: userType) => (
        <CardUser key={user.id} user={user} />
      ))}
    </div>
  );
}
