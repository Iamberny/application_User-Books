import MyMenu from "../components/ui/myComponents/myMenu";
import { MyInputArticles } from "../components/ui/myComponents/myInput";
import { MyCreateCardArticle } from "../components/ui/myComponents/myCreateCardUserBook";

export default function ArticlesPage() {
  return (
    <div>
      <MyMenu />
      <h1 className="text-left text-2xl font-bold ml-15 -mt-10">Narrify</h1>
      <MyInputArticles />

      <div className="ml-460.5">
        <MyCreateCardArticle />
      </div>
    </div>
  );
}
