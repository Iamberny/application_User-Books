import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SquarePen } from "lucide-react";
import {
  DialogConfirmDeleteChanges,
  DialogConfirmDeleteBook,
} from "@/components/myComponents/DialogConfirm";
import { bookType, UpdateBookPayLoad } from "@/types/bookType";
import { userType } from "@/types/userType";
import { Api } from "@/api/api";
import { SkeletonEditUser as SkeletonEditBook } from "./SkeletonBookUser";
import { showBookEditToast } from "./SonnerBookUser";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function MyEditBook() {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<bookType | null>(null);
  const [users, setUsers] = useState<userType[]>([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [buyUrl, setBuyUrl] = useState("");
  const [picture, setPicture] = useState("");
  const [sellerId, setSellerId] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // 🔹 Caricamento dati
  useEffect(() => {
    if (!id) return;
    const fetchBookAndUsers = async () => {
      setLoading(true);
      try {
        const [books, usersList] = await Promise.all([
          Api.getBooks(),
          Api.getUsers(),
        ]);
        setUsers(usersList);
        const foundBook = books.find((b: bookType) => b.id === id);
        if (foundBook) {
          setBook(foundBook);
          setName(foundBook.name);
          setDescription(foundBook.description);
          setBuyUrl(foundBook.buyUrl);
          setPicture(foundBook.picture);
          setSellerId(foundBook.sellerId);
          setCreatedAt(foundBook.createdAt);
        }
      } catch (err) {
        console.error("Book loading error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBookAndUsers();
  }, [id]);

  // 🔹 Upload immagine
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string);
        setPicture(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // 🔹 Salvataggio modifiche con toast
  const handleSave = async () => {
    if (!book) return;
    const data: UpdateBookPayLoad = {
      name,
      description,
      buyUrl,
      picture,
      sellerId,
    };
    try {
      const updatedBook = await Api.updateBook(book.id, data);
      setBook(updatedBook);
      showBookEditToast();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <SkeletonEditBook />;
  if (!book) return <div>Book not found</div>;

  // Trova venditore selezionato
  const selectedSeller = users.find((u) => u.id === sellerId);

  return (
    <div className="flex justify-center items-center">
      <div className="flex gap-6 justify-center">
        {/* Sidebar */}
        <div className="bg-white rounded-xl p-6 w-100 shadow-md ml-10">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-2 mt-5 relative">
              <Label htmlFor="picture" className="cursor-pointer">
                <div className="w-24 h-24 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden relative hover:border-indigo-500 transition-colors">
                  <img
                    src={preview || picture}
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
              <DialogConfirmDeleteBook />
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div className="bg-white rounded-xl p-6 flex-1 shadow-md w-200">
          <div className="flex justify-between">
            <h1 className="text-2xl font-semibold mb-4">Edit Book</h1>
            <p className="text-sm mt-1">Book ID: {book.id}</p>
          </div>

          {/* Nome */}
          <div className="mb-4">
            <label className="block mb-1 mt-10 font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-indigo-500"
            />
          </div>

          {/* Descrizione */}
          <div className="mb-4">
            <label className="block mb-1 mt-10 font-medium text-gray-700">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-3 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-indigo-500"
            />
          </div>

          {/* Buy URL */}
          <div className="mb-4">
            <label className="block mb-1 mt-10 font-medium text-gray-700">
              Buy URL
            </label>
            <input
              type="text"
              value={buyUrl}
              onChange={(e) => setBuyUrl(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-indigo-500"
            />
          </div>

          {/* Seller con avatar + ID nel trigger */}
          <div className="mb-4">
            <label className="block mb-1 mt-10 font-medium text-gray-700">
              Seller
            </label>
            <Select
              value={sellerId}
              onValueChange={(value) => setSellerId(value)}
            >
              <SelectTrigger className="w-full border border-gray-300 rounded-xl px-3 py-2 bg-white focus:ring-2 focus:ring-indigo-500 hover:border-indigo-500">
                {selectedSeller ? (
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <img
                        src={selectedSeller.avatar}
                        alt={selectedSeller.name}
                        className="w-7 h-7 rounded-full"
                      />
                      <span className="text-sm font-medium">
                        {selectedSeller.name}
                      </span>
                    </div>
                    <span className="text-md text-gray-500">
                      ID: {selectedSeller.id}
                    </span>
                  </div>
                ) : (
                  <SelectValue placeholder="Select a seller..." />
                )}
              </SelectTrigger>
              <SelectContent>
                {users.map((u) => (
                  <SelectItem key={u.id} value={u.id}>
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={u.avatar}
                          alt={u.name}
                          className="w-6 h-6 rounded-full object-cover"
                        />
                        <span className="text-md font-medium text-gray-800">
                          {u.name}
                        </span>
                      </div>
                      <span className="text-md text-gray-500">ID: {u.id}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Created at */}
          <div className="mb-4">
            <label className="block mb-1 mt-10 font-medium text-gray-700">
              Created at
            </label>
            <input
              type="text"
              disabled
              value={createdAt}
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-gray-400 cursor-not-allowed"
            />
          </div>

          {/* Pulsanti */}
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
      </div>
    </div>
  );
}
