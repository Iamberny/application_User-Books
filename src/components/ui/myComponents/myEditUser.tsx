import { useState } from "react";
import { Button } from "../button";
import { User } from "lucide-react";
import { Book } from "lucide-react";
import { MyDialogConfirmDeleteUser } from "./myDialogConfirm";

export default function MyEditUser() {
  const [selectedMenu, setSelectedMenu] = useState("profile");
  const [name, setName] = useState("Valentina Pace");
  const [createdAt, setDate] = useState("01/01/1990");
  const [idUser, setId] = useState("1001")
  const [image, setImage] = useState(null);

  return (
    <div className="flex justify-center items-center">
      <div className="flex gap-6 justify-center ">
        <div className="bg-white rounded-xl p-6 w-100 shadow-md ml-10">
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <img
                src={
                  image ||
                  "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
                }
                alt="Profile"
                className="w-28 h-28 rounded-full object-cover shadow/30"
              />
              <input
                type="file"
                accept="image/*"
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>

            <h2 className="text-lg font-semibold text-center">{name}</h2>
            <p className="text-sm text-muted-foreground">{createdAt}</p>

            <div className="w-full mt-4">
              <button
                onClick={() => setSelectedMenu("profile")}
                className={`w-full h-13 py-2 text-left px-4 rounded-4xl mb-8 mt-5 flex gap-2 items-center cursor-pointer ${
                  selectedMenu === "profile"
                    ? "bg-violet-100 text-primary-color font-semibold"
                    : "hover:bg-gray-100"
                }`}
              >
                <User /> User profile
              </button>
              <button
                onClick={() => setSelectedMenu("books")}
                className={`w-full h-13 py-2 text-left px-4 rounded-4xl flex gap-2 items-center cursor-pointer ${
                  selectedMenu === "books"
                    ? "bg-violet-100 text-primary-color font-semibold"
                    : "hover:bg-gray-100"
                }`}
              >
                <Book />
                Books sold
              </button>

                <MyDialogConfirmDeleteUser/>
             
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 flex-1 shadow-md w-200">
          {selectedMenu === "profile" && (
            <div>
              <div className="flex justify-between">
                <h1 className="text-2xl font-semibold mb-4">User profile</h1>
                <p className="text-sm font-md mt-1">User ID: {idUser} </p>
              </div>

              <div className="mb-4">
                <label className="block mb-1 mt-10 font-medium text-gray-700">
                  Full name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-indigo-500"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-1 mt-10 font-medium text-gray-700">
                  Created at
                </label>
                <input
                  type="text" disabled
                  value={createdAt}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-400 cursor-not-allowed"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mt-108">
                <Button className="bg-white hover:bg-indigo-700 hover:text-white text-primary-color border border-indigo-600 rounded-4xl px-4 py-2 cursor-pointer">
                  Delete changes
                </Button>
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-4xl px-4 py-2 cursor-pointer">
                  Save
                </Button>
              </div>
            </div>
          )}

          {selectedMenu === "books" && (
            <div>
              <h1 className="text-2xl font-semibold mb-4">Books sold</h1>
              <p className="text-gray-500">
                No books sold.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
