import EditBook from "@/components/myComponents/EditBook";
import TopMenu from "@/components/myComponents/TopMenu";
import TitleLink from "@/components/myComponents/TitleLink";

function BookDetails() {
  return (
    <div>
      <TopMenu />

      <div className="-mt-8">
        <TitleLink />
      </div>

      <div className="mt-12 mx-auto ">
        <EditBook />
      </div>
    </div>
  );
}

export default BookDetails;
