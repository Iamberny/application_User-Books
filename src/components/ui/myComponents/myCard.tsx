import { userType } from "../../../types/userType";
import { articleType } from "../../../types/articleType";
import { Card } from "../card";
import { Link } from "react-router-dom";

type UserProps = {
  user: userType;
};

export function MyCardUser({ user }: UserProps) {
  const createdAtFormatted = new Date(user.createdAt).toLocaleDateString(
    "it-IT"
  );

  return (
    <Card className="w-60 h-80 max-w-sm mt-25 ml-10">
      <div className="relative flex justify-center -mt-17">
        <div className="w-28 h-28 bg-white rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 shadow-xl/8 border" />

        <img
          src={
            user.avatar ||
            "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
          }
          alt={user.name}
          className="rounded-full w-25 h-25 object-cover relative mt-1.5"
        />
      </div>

      <div className="text-center px-6">
        <h2 className="text-lg font-semibold">{user.name}</h2>
        <p className="text-sm text-muted-foreground">
          Created at {createdAtFormatted}
        </p>
        <p className="text-md mt-6 px-6 font-medium">User ID:</p>
        <p className="text-4xl mt-1 text-primary-color font-semibold">
          {user.id}
        </p>
      </div>

      <div className=" text-center px-6 justify-end mt-1">
        <Link
          to={`/user/${user.id}`}
          className="inline-block w-40 text-center dot-primary-color text-white hover:bg-indigo-800 hover:text-white rounded-3xl border border-input px-4 py-2"
        >
          View profile
        </Link>
      </div>
    </Card>
  );
}

type ArticleProps = {
  article: articleType;
};

export function MyCardBook({ article }: ArticleProps) {
  return (
    <Card className="w-60 h-80 max-w-sm mt-25 ml-10">
      <div className="relative flex justify-center -mt-17">
        <div className="w-28 h-35 bg-white absolute top-0 left-1/2 transform -translate-x-1/2 shadow-xl/8 border rounded-lg -mt-9" />

        <img
          src={
            article.picture ||
            "https://img.freepik.com/vettori-gratuito/icona-del-libro_632498-3975.jpg?semt=ais_hybrid&w=740&q=80"
          }
          alt={article.name}
          className=" w-25 h-32 object-cover relative -mt-7.5 rounded-sm"
        />
      </div>

      <div className="text-center mt-2 px-6">
        <h2 className="text-lg font-semibold whitespace-nowrap">{article.name}</h2>
        <p className="text-sm text-muted-foreground">
          Sold by user: {article.sellerId}
        </p>
        <p className="text-md mt-6 px-6 font-medium">Book ID:</p>
        <p className="text-4xl mt-1 text-primary-color font-semibold">
          {article.id}
        </p>
      </div>

      <div className=" text-center mt-1 px-6 flex justify-center gap-2 text-sm">
        <Link
          to={`/book/2012`}
          className="whitespace-nowrap bg-white hover:bg-indigo-800 hover:text-white text-primary-color border border-indigo-600  rounded-3xl px-4 py-2"
        >
          View details
        </Link>

        <Link
          to={article.buyUrl}
          className="inline-block w-40 text-center dot-primary-color text-white hover:bg-indigo-800 hover:text-white rounded-3xl border border-input px-4 py-2"
        >
          Buy
        </Link>
      </div>
    </Card>
  );
}
