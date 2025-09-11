import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

export function MyDialogConfirmDeleteUser() {
  const [image] = useState(null);
  const [name] = useState("Valentina Pace");
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="bg-red-500 hover:bg-red-600 hover:text-white text-white rounded-4xl px-4 py-2 w-full mt-78.5 cursor-pointer"
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

        <div className="">
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
        </div>
        </DialogContent>
      </form>
    </Dialog>
  );
}


export function MyDialogConfirmDeleteBook() {
  const [image] = useState(null);
  const [name] = useState("Il bosco incantato");
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="bg-red-500 hover:bg-red-600 hover:text-white text-white rounded-4xl px-4 py-2 w-full mt-82 cursor-pointer"
          >
            Delete book
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[480px]">
          <DialogHeader>
            <DialogTitle>Delete Book</DialogTitle>

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
                Are you sure you want to delete this book?
              </p>

              <p className="text-sm text-muted-foreground text-center mb-5 -mt-3">
                The operation is permanent and cannot be cancelled.
              </p>
            </div>
          </DialogHeader>

        <div>
          <DialogFooter >
              <DialogClose asChild>
                <Button variant="outline" className="cursor-pointer w-50">
                  Cancel
                </Button>
              </DialogClose>
                
              <Button
                type="submit"
                className="bg-red-500 hover:bg-red-600 cursor-pointer w-50 mr-1.5" 
              >
                Confirm
              </Button>
            
          </DialogFooter>
        </div>
        </DialogContent>
      </form>
    </Dialog>
  );
}