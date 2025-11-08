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
import { userType } from "@/types/userType";
import { bookType } from "@/types/bookType";

interface DialogDeleteUserProps {
  onConfirm: () => void;
  user: userType;
}

export function DialogConfirmDeleteUser({
  onConfirm,
  user,
}: DialogDeleteUserProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-red-500 hover:bg-red-600 hover:text-white text-white rounded-4xl px-4 py-2 w-full cursor-pointer"
        >
          Delete user
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader>
          <DialogTitle>Delete user</DialogTitle>
          <div className="flex flex-col items-center gap-5 pt-4">
            <img
              src={user.avatar || "https. ..."}
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover shadow/30"
            />
            <h2 className="text-lg font-semibold text-center">{user.name}</h2>
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
          <DialogClose asChild>
            <Button
              type="button"
              onClick={onConfirm}
              className="bg-red-500 hover:bg-red-600 cursor-pointer"
            >
              Confirm
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

interface DialogDeleteBookProps {
  onConfirm: () => void;
  book: bookType;
}

export function DialogConfirmDeleteBook({
  onConfirm,
  book,
}: DialogDeleteBookProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-red-500 hover:bg-red-600 hover:text-white text-white rounded-4xl px-4 py-2 w-full cursor-pointer"
        >
          Delete book
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader>
          <DialogTitle>Delete Book</DialogTitle>
          <div className="flex flex-col items-center gap-5 pt-4">
            <img
              src={book.picture || "https. ..."}
              alt="Book cover"
              className="w-24 h-32 rounded-lg object-cover shadow/30"
            />
            <h2 className="text-lg font-semibold text-center">{book.name}</h2>
            <p className="font-semibold text-center">
              Are you sure you want to delete this book?
            </p>
            <p className="text-sm text-muted-foreground text-center mb-5 -mt-3">
              The operation is permanent and cannot be cancelled.
            </p>
          </div>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" className="cursor-pointer w-50">
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              type="button"
              onClick={onConfirm}
              className="bg-red-500 hover:bg-red-600 cursor-pointer w-50 mr-1.5"
            >
              Confirm
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

interface DialogDeleteChangesProps {
  onConfirm: () => void;
}

export function DialogConfirmDeleteChanges({
  onConfirm,
}: DialogDeleteChangesProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-white hover:bg-indigo-700 hover:text-white text-primary-color border border-indigo-600 rounded-4xl px-4 py-2 w-full cursor-pointer"
        >
          Cancel Changes
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader>
          <DialogTitle>Discard changes?</DialogTitle>
          <div className="flex flex-col items-center gap-5 pt-4">
            <p className="font-semibold text-center mt-10">
              Are you sure you want to discard changes?
            </p>
            <p className="text-sm text-muted-foreground text-center mb-5 -mt-3">
              All your unsaved edits will be lost.
            </p>
          </div>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" className="cursor-pointer">
              Continue Editing
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              type="button"
              onClick={onConfirm}
              className="bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer"
            >
              Discard
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
