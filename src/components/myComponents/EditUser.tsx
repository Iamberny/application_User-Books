import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User, Book, SquarePen } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  DialogConfirmDeleteChanges,
  DialogConfirmDeleteUser,
} from "@/components/myComponents/DialogConfirm";
import { userType, UpdateUserPayLoad } from "@/types/userType";
import { Api } from "@/api/api";
import { showUserEditToast } from "./SonnerBookUser";
import { SkeletonEditUser } from "./SkeletonBookUser";

export default function MyEditUser() {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<userType | null>(null);
  const [selectedMenu, setSelectedMenu] = useState("profile");

  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    const fetchUser = () => {
      setLoading(true);

      Api.getUsers()
        .then((users: userType[]) => {
          const foundUser = users.find((u) => u.id === id);
          if (foundUser) {
            setUser(foundUser);
            setName(foundUser.name);
            setBirthdate(foundUser.birthdate);
            setCreatedAt(foundUser.createdAt);
            setImage(foundUser.avatar);
          }
        })
        .catch((err) => {
          console.error("User loading error:", err);
        })
        .then(() => {
          setLoading(false);
        });
    };

    fetchUser();
  }, [id]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string);
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    if (!user) return;
    const data: UpdateUserPayLoad = { name, birthdate, avatar: image };

    try {
      const updatedUser = await Api.updateUser(user.id, data);
      setUser(updatedUser);
      showUserEditToast();
    } catch (err) {
      console.error(err);
      alert("Error updating user");
    }
  };

  if (loading) return <SkeletonEditUser />;
  if (!user) return <div>User not found</div>;

  return (
    <div className="flex justify-center items-center">
      <div className="flex gap-6 justify-center">
        <div className="bg-white rounded-xl p-6 w-100 shadow-md ml-10">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-2 mt-5 relative">
              <Label htmlFor="picture" className="cursor-pointer">
                <div className="w-24 h-24 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden relative hover:border-indigo-500 transition-colors">
                  <img
                    src={preview || image}
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

              <div className="absolute bg-white p-1 rounded-full shadow mt-19 ml-15">
                <SquarePen className="text-primary-color w-4 h-4" />
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

              <DialogConfirmDeleteUser />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 flex-1 shadow-md w-200">
          {selectedMenu === "profile" && (
            <div>
              <div className="flex justify-between">
                <h1 className="text-2xl font-semibold mb-4">User profile</h1>
                <p className="text-sm font-md mt-1">User ID: {user.id}</p>
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
                  Birthdate
                </label>
                <input
                  type="date"
                  value={birthdate}
                  onChange={(e) => setBirthdate(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-indigo-500"
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
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-400 cursor-not-allowed"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mt-80">
                <DialogConfirmDeleteChanges />

                <Button
                  onClick={handleSave}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-4xl px-4 py-2 cursor-pointer"
                >
                  Save
                </Button>
              </div>
            </div>
          )}

          {selectedMenu === "books" && (
            <div>
              <h1 className="text-2xl font-semibold mb-4">Books sold</h1>
              <p className="text-gray-500">No books sold.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
