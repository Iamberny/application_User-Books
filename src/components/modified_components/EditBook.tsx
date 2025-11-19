import { useState, useMemo } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Book, User, Pencil, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { CardUser } from "@/components/modified_components/CardUser";
import {
  DialogConfirmDeleteChanges,
  DialogConfirmDeleteBook,
} from "@/components/modified_components/DialogConfirm";
import { SkeletonEditUser as SkeletonEditBook } from "./SkeletonBookUser";

import { useBooks, useUpdateBook, useDeleteBook } from "@/hooks/useBooks";
import { useUsers } from "@/hooks/useUsers";
import { bookType, UpdateBookPayLoad } from "@/types/bookType";
import { userType } from "@/types/userType";

import {
  showBookEditToast,
  showBookDeleteToast,
  showBookErrorToast,
  showBookErrorToastUpdate,
} from "./SonnerBookUser";

export default function EditBook() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [selectedMenu, setSelectedMenu] = useState("details");
  const [isEditing, setIsEditing] = useState(false);

  const { data: books = [], isLoading: booksLoading } = useBooks();
  const { data: users = [], isLoading: usersLoading } = useUsers();

  const updateBookMutation = useUpdateBook();
  const deleteBookMutation = useDeleteBook();

  const currentBook = useMemo(() => {
    return books.find((b: bookType) => b.id === id);
  }, [books, id]);

  const currentSeller = useMemo(() => {
    if (!currentBook) return null;
    return users.find((u: userType) => u.id === currentBook.sellerId);
  }, [users, currentBook]);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { isDirty },
  } = useForm<UpdateBookPayLoad>({
    values: currentBook
      ? {
          name: currentBook.name,
          description: currentBook.description,
          buyUrl: currentBook.buyUrl,
          picture: currentBook.picture,
          sellerId: currentBook.sellerId,
        }
      : undefined,
  });

  const currentPicture = watch("picture");
  const watchedSellerId = watch("sellerId");

  if (booksLoading || usersLoading) return <SkeletonEditBook />;

  if (!currentBook) return <Navigate to="/" replace />;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;

        setValue("picture", result, { shouldDirty: true });
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data: UpdateBookPayLoad) => {
    updateBookMutation.mutate(
      { id: currentBook.id, data },
      {
        onSuccess: () => {
          showBookEditToast();
          setIsEditing(false);
        },
        onError: (err) => {
          console.error(err);
          showBookErrorToastUpdate();
        },
      }
    );
  };

  const handleDeleteBook = () => {
    deleteBookMutation.mutate(currentBook.id, {
      onSuccess: () => {
        showBookDeleteToast();
        navigate("/");
      },
      onError: () => {
        showBookErrorToast();
      },
    });
  };

  const handleCancelChanges = () => {
    reset();
    setIsEditing(false);
  };

  return (
    <div className="flex justify-center p-4 md:p-6 lg:p-8 min-h-[800px]">
      <div className="flex flex-col lg:flex-row gap-6 w-full max-w-7xl mx-auto items-stretch">
        <div className="bg-white rounded-xl p-6 w-full lg:w-1/3 shadow-md flex flex-col h-full">
          <div className="flex flex-col items-center gap-4 flex-1">
            <div className="flex flex-col items-center gap-2 mt-5 relative">
              <div className="w-32 h-48 rounded-lg border-2 border-transparent flex items-center justify-center overflow-hidden relative shadow-sm">
                <img
                  src={currentPicture || currentBook.picture}
                  alt="Book Cover"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <h2 className="text-lg font-semibold text-center px-2">
              {currentBook.name}
            </h2>

            <div className="w-full mt-4">
              <button
                onClick={() => setSelectedMenu("details")}
                disabled={isEditing}
                className={`w-full h-13 py-2 text-left px-4 rounded-4xl mb-8 mt-5 flex gap-2 items-center transition-all duration-200 ${
                  isEditing
                    ? "opacity-40 cursor-not-allowed text-gray-400"
                    : selectedMenu === "details"
                    ? "bg-violet-100 text-primary-color font-semibold cursor-default"
                    : "hover:bg-gray-100 cursor-pointer"
                }`}
              >
                <Book className={isEditing ? "text-gray-400" : ""} /> Book
                Details
              </button>
              <button
                onClick={() => setSelectedMenu("seller")}
                disabled={isEditing}
                className={`w-full h-13 py-2 text-left px-4 rounded-4xl flex gap-2 items-center transition-all duration-200 ${
                  isEditing
                    ? "opacity-40 cursor-not-allowed text-gray-400"
                    : selectedMenu === "seller"
                    ? "bg-violet-100 text-primary-color font-semibold cursor-default"
                    : "hover:bg-gray-100 cursor-pointer"
                }`}
              >
                <User className={isEditing ? "text-gray-400" : ""} /> Sold by...
              </button>
            </div>
          </div>

          <div className="w-full mt-8">
            {isEditing && (
              <DialogConfirmDeleteBook
                onConfirm={handleDeleteBook}
                book={currentBook}
              />
            )}
          </div>
        </div>

        <div className="grid bg-white rounded-xl p-6 w-full lg:w-2/3 shadow-md h-full">
          <div
            className={`col-start-1 row-start-1 transition-opacity ${
              selectedMenu === "details" ? "opacity-100" : "opacity-0 invisible"
            } flex flex-col`}
          >
            <div className="flex-1">
              <div className="flex justify-between">
                <h1 className="text-2xl font-semibold mb-4">Book details</h1>
                <p className="text-sm font-md mt-1">
                  Book ID: {currentBook.id}
                </p>
              </div>

              {isEditing && (
                <div className="flex flex-col items-center justify-center mb-6 animate-in fade-in zoom-in duration-300">
                  <Label
                    htmlFor="picture-upload"
                    className="cursor-pointer group relative"
                  >
                    <div className="w-32 h-48 rounded-lg border-2 border-dashed border-indigo-300 hover:border-indigo-500 flex items-center justify-center overflow-hidden relative transition-colors bg-gray-50">
                      <img
                        src={currentPicture}
                        alt="Preview"
                        className="object-cover w-full h-full opacity-60 group-hover:opacity-40 transition-opacity"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-indigo-600">
                        <Upload className="w-6 h-6 mb-1" />
                        <span className="text-xs font-semibold">
                          Change Cover
                        </span>
                      </div>
                    </div>
                  </Label>
                  <Input
                    id="picture-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </div>
              )}

              <div className="mb-4">
                <Label className="block mb-1 mt-2 font-medium text-gray-700">
                  Name
                </Label>
                <Input
                  {...register("name")}
                  disabled={!isEditing}
                  className="w-full border-gray-300 rounded-xl px-3 py-2 focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:border-indigo-600"
                />
              </div>

              <div className="mb-4">
                <Label className="block mb-1 mt-4 font-medium text-gray-700">
                  Description
                </Label>
                <Textarea
                  {...register("description")}
                  disabled={!isEditing}
                  placeholder="Enter book description..."
                  className="resize-none h-32 border-gray-300 rounded-xl focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:border-indigo-600"
                />
              </div>

              <div className="mb-4">
                <Label className="block mb-1 mt-4 font-medium text-gray-700">
                  Buy URL
                </Label>
                <Input
                  {...register("buyUrl")}
                  disabled={!isEditing}
                  className="w-full border-gray-300 rounded-xl px-3 py-2 focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:border-indigo-600"
                />
              </div>

              <div className="mb-4">
                <Label className="block mb-1 mt-4 font-medium text-gray-700">
                  Seller
                </Label>
                <Select
                  disabled={!isEditing}
                  value={watchedSellerId}
                  onValueChange={(val) =>
                    setValue("sellerId", val, { shouldDirty: true })
                  }
                >
                  <SelectTrigger className="w-full border border-gray-300 rounded-xl px-3 py-2 bg-white focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600">
                    <SelectValue placeholder="Select a seller..." />
                  </SelectTrigger>
                  <SelectContent>
                    {users.map((u: userType) => (
                      <SelectItem key={u.id} value={u.id}>
                        <div className="flex items-center gap-2">
                          <img
                            src={u.avatar}
                            alt={u.name}
                            className="w-6 h-6 rounded-full object-cover"
                          />
                          <span>{u.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Input
                type="text"
                disabled
                value={
                  currentBook.createdAt
                    ? new Date(currentBook.createdAt).toLocaleString("it-IT", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                    : ""
                }
                className="w-full border border-gray-200 rounded-xl px-3 py-2 focus:outline-none text-gray-400 cursor-not-allowed"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {isEditing ? (
                <>
                  <DialogConfirmDeleteChanges onConfirm={handleCancelChanges} />
                  <Button
                    onClick={handleSubmit(onSubmit)}
                    disabled={updateBookMutation.isPending || !isDirty}
                    className={`bg-indigo-600 hover:bg-indigo-700 text-white rounded-4xl px-4 py-2 cursor-pointer ${
                      !isDirty || updateBookMutation.isPending
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    {updateBookMutation.isPending ? "Saving..." : "Save"}
                  </Button>
                </>
              ) : (
                <Button
                  onClick={() => setIsEditing(true)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-4xl px-4 py-2 cursor-pointer md:col-span-2 flex items-center justify-center gap-2"
                >
                  <Pencil className="w-4 h-4" />
                  Edit Book
                </Button>
              )}
            </div>
          </div>

          <div
            className={`col-start-1 row-start-1 transition-opacity ${
              selectedMenu === "seller" ? "opacity-100" : "opacity-0 invisible"
            }`}
          >
            <div>
              <h1 className="text-2xl font-semibold mb-4">Sold by</h1>
              {currentSeller ? (
                <div className="flex justify-center pt-8">
                  <CardUser user={currentSeller} />
                </div>
              ) : (
                <div className="text-center mt-10 p-8 border-2 border-dashed rounded-xl bg-gray-50">
                  <p className="text-gray-500">
                    No seller is assigned to this book.
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    Go to "Book Details" and click "Edit Book" to assign one.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
