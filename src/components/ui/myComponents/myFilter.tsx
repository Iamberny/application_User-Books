import * as React from "react";

import { Button } from "../button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../dropdown-menu";

export function MyFilter() {
  const [position, setPosition] = React.useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="dot-primary-color color-text-filter hover:active-color-bg"
      >
        <Button variant="outline" className="hover:active-color-bg">
          Filter
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
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
