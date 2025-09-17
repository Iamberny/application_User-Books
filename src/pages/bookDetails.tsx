import MyEditBook from "@/components/myComponents/EditBook";
import MyMenu from "@/components/myComponents/TopMenu";
import TitleLink from "@/components/myComponents/TitleLink";

function BookDetails() {
  return (
    <div>
      <MyMenu />

      <div className="-mt-8">
        <TitleLink />
      </div>

      <div className="mt-12 mx-auto ">
        <MyEditBook />
      </div>
    </div>
  );
}

export default BookDetails;
