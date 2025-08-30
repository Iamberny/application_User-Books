import MyMenu from "../components/ui/myComponents/myMenu";
import { MyInputArticles } from "../components/ui/myComponents/myInput";
import { MyCreateCardArticle } from "../components/ui/myComponents/myCreateCardUserBook";
import { MyArticleDashboard } from "../components/ui/myComponents/myBookDashboard";

export default function ArticlesPage() {
  return (
    <>
    <div>
      <MyMenu />
      <h1 className="text-left text-2xl font-bold ml-15 -mt-10">Narrify</h1>
      <MyInputArticles />

      <div className="ml-460.5">
        <MyCreateCardArticle />
      </div>

      <div className="grid col-4">
        <div>
          <MyArticleDashboard />
        </div>
      </div>
    </div>
    </>
  );
}
