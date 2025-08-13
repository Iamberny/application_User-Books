import { useState } from "react";
import { Button } from "../button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "../dialog";
import { Label } from "../label";
import { Input } from "../input";
import { Camera, Plus } from "lucide-react";
import Select from "react-select";

export function MyCreateCardUser() {
  const [preview, setPreview] = useState<string | null>(null);

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
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="dot-primary-color w-11 h-11 hover:bg-indigo-800 cursor-pointer"
          >
            <Plus className="text-white" />
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add an user</DialogTitle>

            <div className="flex flex-col items-center gap-2 mt-5">
              <Label htmlFor="picture" className="cursor-pointer">
                <div className="w-24 h-24 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden relative hover:border-indigo-500 transition-colors">
                  {preview ? (
                    <img
                      src={preview}
                      alt="Preview"
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="flex flex-col items-center text-gray-400">
                      <Camera className="w-6 h-6 mb-1" />
                      <span className="text-xs">Upload</span>
                    </div>
                  )}
                </div>
              </Label>
              <Input
                id="picture"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          </DialogHeader>

          <div className="grid gap-4 mt-2 mb-5">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Full name</Label>
              <input
                id="name-1"
                name="name"
                placeholder="Enter your full name"  className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-indigo-500"
              />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button
              type="submit"
              className="dot-primary-color hover:bg-indigo-800"
            >
              Add user
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}

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

export function MyCreateCardArticle() {
  const [preview, setPreview] = useState<string | null>(null);
  const [soldBy, setSoldBy] = useState(null);

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
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="dot-primary-color w-11 h-11 hover:bg-indigo-800 cursor-pointer"
          >
            <Plus className=" text-white " />
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add a book</DialogTitle>

            <div className="flex flex-col items-center gap-2 mt-5">
              <Label htmlFor="picture" className="cursor-pointer">
                <div className="w-28 h-40 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden relative hover:border-indigo-500 transition-colors">
                  {preview ? (
                    <img
                      src={preview}
                      alt="Preview"
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="flex flex-col items-center text-gray-400">
                      <Camera className="w-6 h-6 mb-1" />
                      <span className="text-xs">Upload</span>
                    </div>
                  )}
                </div>
              </Label>
              <Input
                id="picture"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          </DialogHeader>

          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="title1">Title</Label>
              <input id="title1" name="title" placeholder="Enter book title" className="w-full border border-gray-300 rounded-xl px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-indigo-500" />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="description1">Description</Label>
              <input
                id="description1"
                name="description"
                placeholder="Write a short description of the book" className="w-full border border-gray-300 rounded-xl px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-indigo-500"
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="author1">Author</Label>
              <input
                id="author1"
                name="author"
                placeholder="Enter author's name" className="w-full border border-gray-300 rounded-xl px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-indigo-500"
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="url1">Purchase link</Label>
              <input
                type="url"
                id="url-1"
                name="url"
                placeholder="Paste the purchase URL" className="w-full border border-gray-300 rounded-xl px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-indigo-500"
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="soldBy">Sold by</Label>
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
                    borderRadius: "0.5rem",
                    padding: "0.10rem 0.75rem",
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
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button
              type="submit"
              className="dot-primary-color hover:bg-indigo-800"
            >
              Add user
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
