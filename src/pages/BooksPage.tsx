import MyMenu from "@/components/myComponents/TopMenu";
import { SearchInput } from "@/components/myComponents/SearchInput";
import { CreateCardBook } from "@/components/myComponents/CreateCardUserBook";
import { MyBookDashboard } from "@/components/myComponents/BookDashboard";
import { useState } from "react";
import { useBooks } from "@/hooks/useBooks";

export default function BooksPage() {
  const [query, setQuery] = useState("");
  const { data: books, isLoading } = useBooks();
  return (
    <>
      <div>
        <MyMenu />
        <h1 className="text-left text-2xl font-bold ml-15 -mt-10">Narrify</h1>
        <SearchInput query={query} onChange={setQuery} label={"book"} />

        <div className="ml-460.5">
          <CreateCardBook />
        </div>

        <div className="grid col-4">
          <div>
            <MyBookDashboard
              query={query}
              books={books}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </>
  );
}
