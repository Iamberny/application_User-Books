import { bookType } from "@/types/bookType";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";


type BookProps = {
  book: bookType;
};

export function MyCardBook({ book }: BookProps) {
  return (
    <Card className="w-60 h-80 max-w-sm mt-25 ml-10">
      <div className="relative flex justify-center -mt-17">
        <div className="w-28 h-35 bg-white absolute top-0 left-1/2 transform -translate-x-1/2 shadow-xl/8 border rounded-lg -mt-9" />

        <img
          src={
            book.picture ||
            "https://img.freepik.com/vettori-gratuito/icona-del-libro_632498-3975.jpg?semt=ais_hybrid&w=740&q=80"
          }
          alt={book.name}
          className=" w-25 h-32 object-cover relative -mt-7.5 rounded-sm"
        />
      </div>

      <div className="text-center mt-2 px-6">
        <h2 className="text-lg font-semibold whitespace-nowrap">{book.name}</h2>
        <p className="text-sm text-muted-foreground">
          Sold by user: {book.sellerId}
        </p>
        <p className="text-md mt-6 px-6 font-medium">Book ID:</p>
        <p className="text-4xl mt-1 text-primary-color font-semibold">
          {book.id}
        </p>
      </div>

      <div className=" text-center mt-1 px-6 flex justify-center gap-2 text-sm">
        <Link
          to={`/book/${book.id}`}
          className="whitespace-nowrap bg-white hover:bg-indigo-800 hover:text-white text-primary-color border border-indigo-600  rounded-3xl px-4 py-2"
        >
          View details
        </Link>

        <Link
          to={book.buyUrl}
          className="inline-block w-40 text-center dot-primary-color text-white hover:bg-indigo-800 hover:text-white rounded-3xl border border-input px-4 py-2"
        >
          Buy
        </Link>
      </div>
    </Card>
  );
}
