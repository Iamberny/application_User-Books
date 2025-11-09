import { useState } from "react";
import TopMenu from "@/components/myComponents/TopMenu";
import { SearchInput } from "@/components/myComponents/SearchInput";
import { FilterUser, FilterValue } from "@/components/myComponents/FilterUser";
import { CreateCardUser } from "@/components/myComponents/CreateCardUserBook";
import { UserDashboard } from "@/components/myComponents/UserDashboard";

import TitleLink from "@/components/myComponents/TitleLink";

export default function UsersPage() {
  const [filter, setFilter] = useState<FilterValue>("all");
  const [query, setQuery] = useState("");

  return (
    <>
      <div>
        <TopMenu />

        <div className="-mt-8">
          <TitleLink />
        </div>

        <SearchInput query={query} onChange={setQuery} label={"user"} />

        <div className="flex justify-between items-center gap-4 mt-4 ml-10 mr-8">
          <FilterUser value={filter} onChange={setFilter} />
          <CreateCardUser />
        </div>
      </div>

      <UserDashboard filter={filter} query={query} />
    </>
  );
}
