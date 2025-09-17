import { Link, useLocation } from "react-router-dom";

export default function TitleLink() {
  const { pathname } = useLocation();

  const to = pathname.startsWith("/users/")
    ? "/users"
    : pathname.startsWith("/books/")
    ? "/books"
    : "/users";

  return (
    <Link to={to} className="text-blue-500 hover:text-blue-700 font-medium">
      Narrify
    </Link>
  );
}
