import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Filter } from "lucide-react";

export type FilterValue = "all" | "withBooks" | "withoutBooks";

interface MyFilterProps {
  value: FilterValue;
  onChange: (v: FilterValue) => void;
}

export function MyFilter({ value, onChange }: MyFilterProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="dot-primary-color hover:text-white"
      >
        <Button
          variant="outline"
          className="hover:bg-indigo-800 text-white cursor-pointer"
        >
          <Filter /> Filter
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56 ml-5">
        <DropdownMenuLabel>Filter users</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuRadioGroup
          value={value}
          onValueChange={(v) => onChange(v as FilterValue)}
        >
          <DropdownMenuRadioItem value="all" className="cursor-pointer">
            All
          </DropdownMenuRadioItem>

          <DropdownMenuRadioItem value="withBooks" className="cursor-pointer">
            Users with books
          </DropdownMenuRadioItem>

          <DropdownMenuRadioItem
            value="withoutBooks"
            className="cursor-pointer"
          >
            Users without books
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
