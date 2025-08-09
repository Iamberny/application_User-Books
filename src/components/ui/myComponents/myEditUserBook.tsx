import { useState } from "react";
import { Button } from "../button";
import { User } from 'lucide-react';
import { Book } from 'lucide-react';

export default function MyEditUser() {
  const [selectedMenu, setSelectedMenu] = useState("profile");
  const [name, setName] = useState("Valentina Pace");
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
                className="w-28 h-28 rounded-full object-cover"
              />
              <input
                type="file"
                accept="image/*"
                className="absolute inset-0 opacity-0 cursor-pointer"
                
              />
            </div>

            <h2 className="text-lg font-semibold text-center">{name}</h2>

            <div className="w-full mt-4">
              <button
                onClick={() => setSelectedMenu("profile")}
                className={`w-full h-13 py-2 text-left px-4 rounded-4xl mb-8 mt-10 flex gap-2 items-center  ${
                  selectedMenu === "profile"
                    ? "bg-violet-100 text-primary-color font-semibold"
                    : "hover:bg-gray-100"
                }`}
              >
                <User/> User profile
              </button>
              <button
                onClick={() => setSelectedMenu("books")}
                className={`w-full h-13 py-2 text-left px-4 rounded-4xl flex gap-2 items-center ${
                  selectedMenu === "books"
                    ? "bg-violet-100 text-primary-color font-semibold"
                    : "hover:bg-gray-100"
                }`}
              >
                <Book/>Books sold
              </button>


              <Button className="bg-red-500 hover:bg-red-600 text-white rounded-md px-4 py-2 w-full mt-80">
                  Delete user
                </Button>
            </div>

            
          </div>
        </div>

    



        <div className="bg-white rounded-xl p-6 flex-1 shadow-md w-200">
          {selectedMenu === "profile" && (
            <div>
              <h1 className="text-2xl font-semibold mb-4">Modifica profilo</h1>

              <div className="mb-4">
                <label className="block mb-1 font-medium text-gray-700">
                  Nome
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="flex gap-4">
                <Button className="bg-red-500 hover:bg-red-600 text-white rounded-md px-4 py-2">
                  Elimina
                </Button>
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-md px-4 py-2">
                  Salva
                </Button>
              </div>
            </div>
          )}

          {selectedMenu === "books" && (
            <div>
              <h1 className="text-2xl font-semibold mb-4">Libri</h1>
              <p className="text-gray-500">Nessun libro disponibile al momento.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
