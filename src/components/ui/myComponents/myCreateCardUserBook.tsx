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

export function MyCreateCardUser() {
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
              <Input id="name-1" name="name" placeholder="Enter your full name" />
            </div>
           
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" className="dot-primary-color hover:bg-indigo-800">Add user</Button>
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
              <Input id="name-1" name="name" placeholder="Enter your full name" />
            </div>
           
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" className="dot-primary-color hover:bg-indigo-800">Add user</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
