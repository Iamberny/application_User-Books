import EditBook from "@/components/modified_components/EditBook";
import TopMenu from "@/components/modified_components/TopMenu";
import TitleLink from "@/components/modified_components/TitleLink";

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
