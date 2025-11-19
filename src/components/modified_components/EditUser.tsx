import { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { User, Book, Pencil, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CardBook } from "@/components/modified_components/CardBook";
import {
  DialogConfirmDeleteChanges,
  DialogConfirmDeleteUser,
} from "@/components/modified_components/DialogConfirm";
import { SkeletonEditUser, SkeletonBookCard } from "./SkeletonBookUser";

import { useUsers, useUpdateUser, useDeleteUser } from "@/hooks/useUsers";
import { useBooks } from "@/hooks/useBooks";
import { userType, UpdateUserPayLoad } from "@/types/userType";
import { bookType } from "@/types/bookType";

import {
  showUserEditToast,
  showUserDeleteToast,
  showUserErrorToast,
  showUserErrorToastUpdate,
} from "./SonnerBookUser";

export default function EditUser() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [selectedMenu, setSelectedMenu] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const today = new Date().toLocaleDateString("en-CA");

  const { data: users = [], isLoading: usersLoading } = useUsers();
  const { data: books = [], isLoading: booksLoading } = useBooks();

  const updateUserMutation = useUpdateUser();
  const deleteUserMutation = useDeleteUser();

  const currentUser = useMemo(() => {
    return users.find((u: userType) => u.id === id);
  }, [users, id]);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { isDirty },
  } = useForm<UpdateUserPayLoad>({
    defaultValues: {
      name: "",
      birthdate: "",
      avatar: "",
    },
  });

  const currentAvatar = watch("avatar");

  useEffect(() => {
    if (!usersLoading && !currentUser && id) {
      navigate("/");
    }
  }, [usersLoading, currentUser, id, navigate]);

  useEffect(() => {
    if (currentUser) {
      reset({
        name: currentUser.name,
        birthdate: currentUser.birthdate,
        avatar: currentUser.avatar,
      });
      setPreview(null);
    }
  }, [currentUser, reset]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setPreview(result);
        setValue("avatar", result, { shouldDirty: true });
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data: UpdateUserPayLoad) => {
    if (!currentUser) return;
    updateUserMutation.mutate(
      { id: currentUser.id, data },
      {
        onSuccess: () => {
          showUserEditToast();
          setIsEditing(false);
          setPreview(null);
        },
        onError: (err) => {
          console.error(err);
          showUserErrorToastUpdate();
        },
      }
    );
  };

  const handleDeleteUser = () => {
    if (!currentUser) return;
    deleteUserMutation.mutate(currentUser.id, {
      onSuccess: () => {
        showUserDeleteToast();
        navigate("/");
      },
      onError: () => {
        showUserErrorToast();
      },
    });
  };

  const handleCancelChanges = () => {
    reset();
    setPreview(null);
    setIsEditing(false);
  };

  if (usersLoading) return <SkeletonEditUser />;
  if (!currentUser) return null;

  return (
    <div className="flex justify-center p-4 md:p-6 lg:p-8 min-h-[800px]">
      <div className="flex flex-col lg:flex-row gap-6 w-full max-w-7xl mx-auto items-stretch">
        <div className="bg-white rounded-xl p-6 w-full lg:w-1/3 shadow-md flex flex-col h-full">
          <div className="flex flex-col items-center gap-4 flex-1">
            <div className="flex flex-col items-center gap-2 mt-5 relative">
              <div className="w-24 h-24 rounded-full border-2 border-transparent flex items-center justify-center overflow-hidden relative shadow-sm">
                <img
                  src={preview || currentUser.avatar}
                  alt="Avatar"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <h2 className="text-lg font-semibold text-center">
              {currentUser.name}
            </h2>

            <div className="w-full mt-4">
              <button
                onClick={() => setSelectedMenu("profile")}
                disabled={isEditing}
                className={`w-full h-13 py-2 text-left px-4 rounded-4xl mb-8 mt-5 flex gap-2 items-center transition-all duration-200 ${
                  isEditing
                    ? "opacity-40 cursor-not-allowed text-gray-400"
                    : selectedMenu === "profile"
                    ? "bg-violet-100 text-primary-color font-semibold cursor-default"
                    : "hover:bg-gray-100 cursor-pointer"
                }`}
              >
                <User className={isEditing ? "text-gray-400" : ""} /> User
                profile
              </button>
              <button
                onClick={() => setSelectedMenu("books")}
                disabled={isEditing}
                className={`w-full h-13 py-2 text-left px-4 rounded-4xl flex gap-2 items-center transition-all duration-200 ${
                  isEditing
                    ? "opacity-40 cursor-not-allowed text-gray-400"
                    : selectedMenu === "books"
                    ? "bg-violet-100 text-primary-color font-semibold cursor-default"
                    : "hover:bg-gray-100 cursor-pointer"
                }`}
              >
                <Book className={isEditing ? "text-gray-400" : ""} />
                Books sold
              </button>
            </div>
          </div>

          <div className="w-full mt-8">
            {isEditing && (
              <DialogConfirmDeleteUser
                onConfirm={handleDeleteUser}
                user={currentUser}
              />
            )}
          </div>
        </div>

        <div className="grid bg-white rounded-xl p-6 w-full lg:w-2/3 shadow-md h-full">
          <div
            className={`col-start-1 row-start-1 transition-opacity ${
              selectedMenu === "profile" ? "opacity-100" : "opacity-0 invisible"
            } flex flex-col`}
          >
            <div className="flex-1">
              <div className="flex justify-between">
                <h1 className="text-2xl font-semibold mb-4">User profile</h1>
                <p className="text-sm font-md mt-1">
                  User ID: {currentUser.id}
                </p>
              </div>

              {isEditing && (
                <div className="flex flex-col items-center justify-center mb-6 animate-in fade-in zoom-in duration-300">
                  <Label
                    htmlFor="picture-upload"
                    className="cursor-pointer group relative"
                  >
                    <div className="w-28 h-28 rounded-full border-2 border-dashed border-indigo-300 hover:border-indigo-500 flex items-center justify-center overflow-hidden relative transition-colors bg-gray-50">
                      <img
                        src={preview || currentAvatar}
                        alt="Preview"
                        className="object-cover w-full h-full opacity-60 group-hover:opacity-40 transition-opacity"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-indigo-600">
                        <Upload className="w-6 h-6 mb-1" />
                        <span className="text-xs font-semibold">Change</span>
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
                  Full name
                </Label>
                <Input
                  {...register("name")}
                  disabled={!isEditing}
                  className="w-full border-gray-300 rounded-xl px-3 py-2 focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:border-indigo-600"
                />
              </div>

              <div className="mb-4">
                <Label className="block mb-1 mt-10 font-medium text-gray-700">
                  Birthdate
                </Label>
                <Input
                  type="date"
                  max={today}
                  {...register("birthdate")}
                  disabled={!isEditing}
                  className="w-full border-gray-300 rounded-xl px-3 py-2 focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:border-indigo-600"
                />
              </div>

              <Input
                type="text"
                disabled
                value={
                  currentUser.createdAt
                    ? new Date(currentUser.createdAt).toLocaleString("it-IT", {
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
                    disabled={updateUserMutation.isPending || !isDirty}
                    className={`bg-indigo-600 hover:bg-indigo-700 text-white rounded-4xl px-4 py-2 cursor-pointer ${
                      !isDirty || updateUserMutation.isPending
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    {updateUserMutation.isPending ? "Saving..." : "Save"}
                  </Button>
                </>
              ) : (
                <Button
                  onClick={() => setIsEditing(true)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-4xl px-4 py-2 cursor-pointer md:col-span-2 flex items-center justify-center gap-2"
                >
                  <Pencil className="w-4 h-4" />
                  Edit Profile
                </Button>
              )}
            </div>
          </div>

          <div
            className={`col-start-1 row-start-1 transition-opacity ${
              selectedMenu === "books" ? "opacity-100" : "opacity-0 invisible"
            }`}
          >
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
                    (b: bookType) =>
                      String(b.sellerId) === String(currentUser.id)
                  );
                  if (soldBooks.length === 0) {
                    return <p className="text-gray-500">No books sold.</p>;
                  }
                  return (
                    <div className="flex flex-wrap justify-center mt-6 gap-6 mb-5">
                      {soldBooks.map((book: bookType) => (
                        <CardBook key={book.id} book={book} />
                      ))}
                    </div>
                  );
                })()
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
