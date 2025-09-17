import { userType } from "@/types/userType";
import { Card } from "@/components/ui/card";
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
          className="inline-block w-40 text-center dot-primary-color text-white hover:bg-indigo-800 hover:text-white rounded-3xl border border-input px-4 py-2 transition-transform duration-200 hover:scale-105"
        >
          View profile
        </Link>
      </div>
    </Card>
  );
}
