import MyMenu from "../components/ui/myComponents/myMenu";
import { MyInputUser } from "../components/ui/myComponents/myInput";
import { MyFilter } from "../components/ui/myComponents/myFilter";
import { MyCard } from "../components/ui/myComponents/myCard";
import { MyCreateCardUser } from "../components/ui/myComponents/myCreateCardUserBook";


export default function UsersPage() {
  return (
    <div>
      <MyMenu />
      <h1 className="text-left text-2xl font-bold ml-15 -mt-10">Narrify</h1>
      <MyInputUser />

      <div className="ml-10 inline-flex space-x-430">
        <MyFilter />
        <MyCreateCardUser/>
      </div>

      <div>
        <MyCard/>
      </div>
    </div>
  );
}
