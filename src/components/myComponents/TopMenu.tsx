import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import "@/index.css";

export default function MyMenu() {
  const location = useLocation();

  return (
    <NavigationMenu className="mx-auto mt-8">
      <NavigationMenuList className="relative">
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              to="/users"
              className={cn(
                "relative px-4 py-2 text-base font-medium",
                location.pathname === "/users"
                  ? "text-primary-color"
                  : "hover:text-gray-500"
              )}
            >
              Users
              {location.pathname === "/users" && (
                <motion.span
                  layoutId="active-dot"
                  className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-2 w-2 rounded-full dot-primary-color"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <div className="h-6 w-px bg-muted mx-2 self-center line-color" />

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              to="/books"
              className={cn(
                "relative px-4 py-2 text-base font-medium",
                location.pathname === "/books"
                  ? "text-primary-color"
                  : "hover:text-gray-500"
              )}
            >
              Books
              {location.pathname === "/books" && (
                <motion.span
                  layoutId="active-dot"
                  className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-2 w-2 rounded-full dot-primary-color"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
