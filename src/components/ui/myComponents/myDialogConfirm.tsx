import { Button } from "../button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../dialog";
import { Input } from "../input";
import { Label } from "../label";
import { Plus } from "lucide-react";
import { useState } from "react";

export function MyDialogConfirmDeleteUser() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("Valentina Pace");
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="bg-red-500 hover:bg-red-600 hover:text-white text-white rounded-4xl px-4 py-2 w-full mt-80 cursor-pointer"
          >
            Delete user
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[480px]">
          <DialogHeader>
            <DialogTitle>Delete user</DialogTitle>

            <div className="flex flex-col items-center gap-5">
              <img
                src={
                  image ||
                  "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
                }
                alt="Profile"
                className="w-28 h-28 rounded-full object-cover shadow/30"
              />

              <h2 className="text-lg font-semibold text-center">{name}</h2>

              <p className="font-semibold text-center">
                Are you sure you want to delete this user?
              </p>

              <p className="text-sm text-muted-foreground text-center mb-5 -mt-3">
                The operation is permanent and cannot be cancelled.
              </p>
            </div>
          </DialogHeader>

          <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" className="cursor-pointer">
                  Cancel
                </Button>
              </DialogClose>
                
              <Button
                type="submit"
                className="bg-red-500 hover:bg-red-600 cursor-pointer"
              >
                Confirm
              </Button>
            
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}

export function MyCreateCardArticle() {
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
            <DialogTitle>Add an user</DialogTitle>

            <div className="grid w-full max-w-sm items-center gap-3 mt-5 ">
              <Label htmlFor="picture">Picture</Label>
              <Input id="picture" type="file" />
            </div>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Full name</Label>
              <Input
                id="name-1"
                name="name"
                placeholder="Enter your full name"
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
