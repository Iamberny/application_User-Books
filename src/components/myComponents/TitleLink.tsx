import { Link, useLocation } from "react-router-dom";

export default function TitleLink() {
  const { pathname } = useLocation();

  const to = pathname.startsWith("/users/")
    ? "/users"
    : pathname.startsWith("/books/")
    ? "/books"
    : "/users";

  return (
    <Link to={to} className="text-left text-2xl font-bold ml-16 -mt-20">
      Narrify
    </Link>
  );
}
