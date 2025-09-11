import { useState } from "react";
import MyMenu from "@/components/myComponents/TopMenu";
import { MyInputUser } from "@/components/myComponents/SearchInput";
import { MyFilter, FilterValue } from "@/components/myComponents/FilterUser";
import { MyCreateCardUser } from "@/components/myComponents/CreateCardUserBook";
import { MyUserDashboard } from "@/components/myComponents/UserDashboard";

export default function UsersPage() {
  const [filter, setFilter] = useState<FilterValue>("all");
  const [query, setQuery] = useState("");

  return (
    <>
      <div>
        <MyMenu />
        <h1 className="text-left text-2xl font-bold ml-15 -mt-10">Narrify</h1>

        <MyInputUser query={query} onChange={setQuery} />

        <div className="ml-15 inline-flex space-x-430">
          <MyFilter value={filter} onChange={setFilter} />
          <MyCreateCardUser />
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
