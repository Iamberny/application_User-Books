import MyMenu from "@/components/myComponents/myMenu";
import { MyInputBook } from "@/components/myComponents/myInput";
import { MyCreateCardBook } from "@/components/myComponents/myCreateCardUserBook";
import { MyBookDashboard } from "@/components/myComponents/myBookDashboard";

export default function BooksPage() {
  return (
    <>
    <div>
      <MyMenu />
      <h1 className="text-left text-2xl font-bold ml-15 -mt-10">Narrify</h1>
      <MyInputBook />

      <div className="ml-460.5">
        <MyCreateCardBook />
      </div>

      <div className="grid col-4">
        <div>
          <MyBookDashboard />
        </div>
      </div>
    </div>
    </>
  );
}
