import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User, Book, SquarePen } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useBooks } from "@/hooks/useBooks";
import { MyCardBook } from "@/components/myComponents/CardBook";
import {
  DialogConfirmDeleteChanges,
  DialogConfirmDeleteUser,
} from "@/components/myComponents/DialogConfirm";
import { userType, UpdateUserPayLoad } from "@/types/userType";
import { Api } from "@/api/api";
import { showUserEditToast, showUserDeleteToast } from "./SonnerBookUser";
import { SkeletonEditUser } from "./SkeletonBookUser";
import { SkeletonBookCard } from "./SkeletonBookUser";
import { bookType } from "@/types/bookType";

export default function MyEditUser() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [user, setUser] = useState<userType | null>(null);
  const [selectedMenu, setSelectedMenu] = useState("profile");

  // Stati del form
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState<string | null>(null);

  const [loading, setLoading] = useState(true);
  const { data: books = [], isLoading: booksLoading } = useBooks();

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
          } else {
            navigate("/");
          }
        })
        .catch((err) => {
          console.error("User loading error:", err);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchUser();
  }, [id, navigate]);

  // --- FUNZIONI DI AZIONE ---

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
      setPreview(null);
    } catch (err) {
      console.error(err);
      alert("Error updating user");
    }
  };

  const handleCancelChanges = () => {
    if (user) {
      setName(user.name);
      setBirthdate(user.birthdate);
      setImage(user.avatar);
      setPreview(null);
    }
  };

  const handleDeleteUser = async () => {
    if (!user) return;
    try {
      await Api.deleteUser(user.id);
      showUserDeleteToast();
      navigate("/");
    } catch (err) {
      console.error("Failed to delete user:", err);
      alert("Failed to delete user");
    }
  };

  // --- RENDER ---

  if (loading) return <SkeletonEditUser />;
  if (!user) return <div>User not found</div>;

  return (
    // MODIFICATO: Aggiunto 'min-h-screen'
    <div className="flex justify-center p-4 md:p-6 lg:p-8 min-h-[800px]">
      {/* GENITORE FLEX PER LE COLONNE - 'items-stretch' è corretto */}
      <div className="flex flex-col lg:flex-row gap-6 w-full max-w-7xl mx-auto items-stretch">
        {/* COLONNA SINISTRA (MENU, IMMAGINE E AZIONI) */}
        {/* 'flex flex-col h-full' è corretto */}
        <div className="bg-white rounded-xl p-6 w-full lg:w-1/3 shadow-md flex flex-col h-full">
          {/* Contenuto principale (cresce) - 'flex-1' è corretto */}
          <div className="flex flex-col items-center gap-4 flex-1">
            {/* Anteprima Immagine */}
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
              {/* Menu di navigazione */}
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
            </div>
          </div>

          {/* Bottone Delete - 'mt-8' è corretto e lo allinea */}
          <div className="w-full mt-8">
            <DialogConfirmDeleteUser onConfirm={handleDeleteUser} user={user} />
          </div>
        </div>

        {/* COLONNA DESTRA (CONTENUTO DINAMICO) */}
        {/* MODIFICATO: Aggiunto 'flex flex-col' per la struttura a colonna */}
        <div className="bg-white rounded-xl p-6 w-full lg:w-2/3 shadow-md h-full flex flex-col">
          {selectedMenu === "profile" && (
            // MODIFICATO: Aggiunto Fragment per raggruppare contenuto e bottoni
            <>
              {/* MODIFICATO: Wrapper con 'flex-1' per far crescere il contenuto */}
              <div className="flex-1">
                <div className="flex justify-between">
                  <h1 className="text-2xl font-semibold mb-4">User profile</h1>
                  <p className="text-sm font-md mt-1">User ID: {user.id}</p>
                </div>

                {/* Campi del form */}
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
              </div>

              {/* Bottoni Save e Cancel */}
              {/* MODIFICATO: Spostati fuori dal div 'flex-1', 'mt-8' li allinea */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <DialogConfirmDeleteChanges onConfirm={handleCancelChanges} />
                <Button
                  onClick={handleSave}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-4xl px-4 py-2 cursor-pointer"
                >
                  Save
                </Button>
              </div>
            </>
          )}

          {selectedMenu === "books" && (
            // MODIFICATO: Aggiunto 'flex-1' per far espandere questa vista
            <div className="flex-1">
              <h1 className="text-2xl font-semibold mb-4">Books sold</h1>
              {booksLoading ? (
                <div className="flex flex-wrap justify-center mt-6 gap-6 mb-5">
                  {Array.from({ length: 6 }).map((_, idx) => (
                    <SkeletonBookCard key={idx} />
                  ))}
                </div>
              ) : (
                (() => {
                  const soldBooks = books.filter(
                    (b: bookType) => String(b.sellerId) === String(user.id)
                  );
                  if (soldBooks.length === 0) {
                    return <p className="text-gray-500">No books sold.</p>;
                  }
                  return (
                    <div className="flex flex-wrap justify-center mt-6 gap-6 mb-5">
                      {soldBooks.map((book: bookType) => (
                        <MyCardBook key={book.id} book={book} />
                      ))}
                    </div>
                  );
                })()
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
