import { useArticles } from "../../../hooks/useArticles";
import { MyCardBook} from "./myCard";

export function MyArticleDashboard() {
  const { data: articles, isLoading } = useArticles();

  if (isLoading) return <p>Loading books...</p>;

  return (
    <div className="flex flex-wrap mt-6 gap-6 ml-8 mb-5">
      {articles?.map((article: any) => (
        <MyCardBook key={article.id} article={article} />
      ))}
    </div>
  );
}


