import { useState } from "react";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { Book } from "lucide-react";
import { MyDialogConfirmDeleteBook } from "@/components/myComponents/myDialogConfirm";
import { Label } from "@/components/ui/label";
import Select from "react-select";
import { SquarePen } from "lucide-react";
import { Input } from "@/components/ui/input";

const users = [
  {
    value: "user1",
    label: "User 1",
    id: "ID001",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    value: "user2",
    label: "User 2",
    id: "ID002",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    value: "user3",
    label: "User 3",
    id: "ID003",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const CustomOption = (props: { data: any; innerRef: any; innerProps: any }) => {
  const { data, innerRef, innerProps } = props;
  return (
    <div
      ref={innerRef}
      {...innerProps}
      className="flex items-center justify-between px-2 py-1 hover:bg-gray-100 cursor-pointer"
    >
      <div className="flex items-center gap-2">
        <img
          src={data.image}
          alt={data.label}
          className="w-8 h-8 rounded-full object-cover"
        />
        <span>{data.label}</span>
      </div>
      <span className="text-gray-500 text-sm">{data.id}</span>
    </div>
  );
};

export default function MyEditBook() {
  const [selectedMenu, setSelectedMenu] = useState("profile");
  const [name, setName] = useState("Il bosco incantato");
  const [createdAt, setDate] = useState("01/01/1990");
  const [idBook] = useState("2012");
  const [image] = useState(
    "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
  );
  const [_, setSoldBy] = useState(null);

  const [__, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex gap-6 justify-center ">
        <div className="bg-white rounded-xl p-6 w-100 shadow-md ml-10">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-2 mt-5">
              <Label htmlFor="picture" className="cursor-pointer">
                <div className="w-28 h-40 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden relative hover:border-indigo-500 transition-colors">
                  <img
                    src={image}
                    alt="Preview"
                    className="object-cover w-full h-full"
                  />
              
                 
                </div>
              </Label>

              <Input
                id="picture"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
               <div className="absolute bg-white p-1 rounded-full shadow mt-35 ml-22">
                    <SquarePen className="text-primary-color w-5 h-5" />
                  </div>

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
                <User /> Book details
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
                Sold by...
              </button>

              <MyDialogConfirmDeleteBook />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 flex-1 shadow-md w-200">
          {selectedMenu === "profile" && (
            <div>
              <div className="flex justify-between">
                <h1 className="text-2xl font-semibold mb-4">Book details</h1>
                <p className="text-sm font-md mt-1">Book ID: {idBook} </p>
              </div>

              <div className="mb-4">
                <label className="block mb-1 mt-10 font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  placeholder="Enter book title"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-indigo-500"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-1 mt-10 font-medium text-gray-700">
                  Description
                </label>
                <input
                  type="text"
                  placeholder="Write a short description of the book"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-indigo-500"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-1 mt-10 font-medium text-gray-700">
                  Author
                </label>
                <input
                  type="text"
                  placeholder="Enter author's name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-indigo-500"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-1 mt-10 font-medium text-gray-700">
                  Purchase link
                </label>
                <input
                  type="text"
                  placeholder="Paste the purchase URL"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-indigo-500"
                />
              </div>

              <div className="mb-4">
                <Label
                  htmlFor="soldBy"
                  className="block mb-1 mt-10 font-medium text-gray-700"
                >
                  Sold by
                </Label>
                <Select
                  id="soldBy"
                  options={users}
                  placeholder="Choose user..."
                  components={{ Option: CustomOption }}
                  onChange={(newValue) => setSoldBy(newValue)}
                  styles={{
                    control: (base, state) => ({
                      ...base,
                      width: "100%",
                      border: "1px solid #D1D5DB",
                      borderRadius: "1rem",
                      padding: "0.20rem 0.75rem",
                      boxShadow: state.isFocused ? "0 0 0 2px #6366F1" : "none",
                      "&:hover": {
                        borderColor: "#6366F1",
                      },
                    }),
                    placeholder: (base) => ({
                      ...base,
                      color: "#9CA3AF",
                    }),
                    valueContainer: (base) => ({
                      ...base,
                      padding: 0,
                    }),
                    input: (base) => ({
                      ...base,
                      margin: 0,
                      padding: 0,
                    }),
                  }}
                />
              </div>

              <div className="mb-4">
                <label className="block mb-1 mt-10 font-medium text-gray-700">
                  Created at
                </label>
                <input
                  type="text"
                  disabled
                  value={createdAt}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-400 cursor-not-allowed"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mt-20">
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
              <h1 className="text-2xl font-semibold mb-4">Sold by...</h1>
              <p className="text-gray-500">Test</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
