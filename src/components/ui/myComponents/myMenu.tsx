import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuIndicator,
} from "@/components/navigation-menu";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../../../lib/utils";
import '../../../index.css';

export default function MyMenu() {
  const location = useLocation();

  return (
    <NavigationMenu className=" mx-auto mt-8">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              to="/users"
              className={cn(
                "px-4 py-2 text-base font-medium",
                location.pathname === "/users"
                  ? "relative text-primary-color "
                  : "hover:text-gray-500"
              )}
            >
              Users
              {location.pathname === "/users" && (
                <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-2 w-2 rounded-full dot-primary-color " />
              )}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <div className="h-6 w-px bg-muted mx-2 self-center line-color"/>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              to="/books"
              className={cn(
                "px-4 py-2 text-base font-medium ",
                location.pathname === "/books" ? "relative text-primary-color "
                  : "hover:text-gray-500"
              )}
            >
              Books
              {location.pathname === "/books" && (
                <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-2 w-2 rounded-full dot-primary-color" />
              )}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuIndicator />
    </NavigationMenu>
  );
}
