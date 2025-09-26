import MyMenu from "@/components/myComponents/TopMenu";
import { SearchInput } from "@/components/myComponents/SearchInput";
import { CreateCardBook } from "@/components/myComponents/CreateCardUserBook";
import { MyBookDashboard } from "@/components/myComponents/BookDashboard";
import { useState } from "react";
import { useBooks } from "@/hooks/useBooks";
import TitleLink from "@/components/myComponents/TitleLink";

export default function BooksPage() {
  const [query, setQuery] = useState("");
  const { data: books, isLoading } = useBooks();
  return (
    <>
      <div>
        <MyMenu />
        <div className="-mt-8">
          <TitleLink />
        </div>
        <SearchInput query={query} onChange={setQuery} label={"book"} />

        <div className="flex justify-end">
          <CreateCardBook />
        </div>

        <div className="grid col-4">
          <MyBookDashboard query={query} books={books} isLoading={isLoading} />
        </div>
      </div>
    </>
  );
}
