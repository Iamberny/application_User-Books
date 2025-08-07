import MyMenu from "../components/ui/myComponents/myMenu"
import { MyInputUser } from "../components/ui/myComponents/myInput"
import { MyFilter } from "../components/ui/myComponents/myFilter"

export default function UsersPage() {
  return (
    <div>
      <MyMenu />
        <h1 className="text-left text-2xl font-bold ml-15 -mt-10">Narrify</h1>
      <MyInputUser/>
      <MyFilter/>
 
    </div>
  )
}
