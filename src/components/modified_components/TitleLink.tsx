import { Link, useLocation } from "react-router-dom";

export default function TitleLink() {
  const { pathname } = useLocation();

  const to = pathname.startsWith("/users/")
    ? "/users"
    : pathname.startsWith("/books/")
    ? "/books"
    : "/users";

  return (
    <Link
      to={to}
      className="text-2xl font-bold text-left ml-4 mt-4 md:ml-16 md:mt-0"
    >
      Narrify
    </Link>
  );
}
