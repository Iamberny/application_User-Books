import { useState } from "react";
import MyMenu from "@/components/myComponents/TopMenu";
import { SearchInput } from "@/components/myComponents/SearchInput";
import { MyFilter, FilterValue } from "@/components/myComponents/FilterUser";
import { CreateCardUser } from "@/components/myComponents/CreateCardUserBook";
import { MyUserDashboard } from "@/components/myComponents/UserDashboard";

import TitleLink from "@/components/myComponents/TitleLink";

export default function UsersPage() {
  const [filter, setFilter] = useState<FilterValue>("all");
  const [query, setQuery] = useState("");

  return (
    <>
      <div>
        <MyMenu />

        <div className="-mt-8">
          <TitleLink />
        </div>

        <SearchInput query={query} onChange={setQuery} label={"user"} />

        <div className="ml-15 inline-flex space-x-430">
          <MyFilter value={filter} onChange={setFilter} />
          <CreateCardUser />
        </div>
      </div>

      <div className="grid col-4">
        <div>
          <MyUserDashboard filter={filter} query={query} />
        </div>
      </div>
    </>
  );
}
