import { useArticles } from "../../../hooks/useArticles";
import { MyCardBook } from "./myCard";
import { SkeletonBookCard } from "./mySkeleton";

export function MyArticleDashboard() {
  const { data: articles, isLoading } = useArticles();



  if (isLoading)
    return (
      <div className="flex flex-wrap mt-6 gap-6 ml-8 mb-5">
        {Array.from({ length: 6 }).map((_, idx) => (
          <SkeletonBookCard key={idx} />
        ))}
      </div>
    );

  return (
    <div className="flex flex-wrap mt-6 gap-6 ml-8 mb-5">
      {articles?.map((article: any) => (
        <MyCardBook key={article.id} article={article} />
      ))}
    </div>
  );
}
