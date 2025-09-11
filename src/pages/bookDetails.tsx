import MyEditBook from "@/components/myComponents/EditBook";
import MyMenu from "@/components/myComponents/TopMenu";

function BookDetails() {
  return (
    <div>
      <MyMenu />

      <h1 className="text-left text-2xl font-bold ml-15 -mt-10">Narrify</h1>

      <div className="mt-12 mx-auto ">
        <MyEditBook />
      </div>
    </div>
  );
}

export default BookDetails;
