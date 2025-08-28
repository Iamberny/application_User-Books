import * as React from "react";

import { Button } from "@/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/dropdown-menu";

import { Filter } from "lucide-react";

export function MyFilter() {
  const [position, setPosition] = React.useState("bottom");

  return (
    <DropdownMenu > 
      <DropdownMenuTrigger
        asChild
        className="dot-primary-color hover:text-white"
      >
        <Button variant="outline" className="hover:bg-indigo-800 text-white cursor-pointer">
         <Filter/> Filter
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 ml-5">
        <DropdownMenuLabel>Filter users</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">All</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">
            Users with books
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">
            Users without books
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
