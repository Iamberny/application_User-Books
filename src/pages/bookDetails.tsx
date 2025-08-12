import MyEditBook from "../components/ui/myComponents/myEditBook";
import MyMenu from "../components/ui/myComponents/myMenu";


function BookDetails() {
  return (
    <div>
      <MyMenu />
      <h1 className="text-left text-2xl font-bold ml-15 -mt-10">Narrify</h1>

      <div className="mt-15 mx-auto ">
        <MyEditBook/>
      </div>


    </div>
  );
}

export default BookDetails;
