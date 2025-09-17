import { Search } from "lucide-react";

interface Props {
  query: string;
  onChange: (value: string) => void;
}

export function MyInputUser({ query, onChange }: Props) {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      <Search className="absolute left-3 top-36 -translate-y-1/2 h-4 w-4 text-gray-500" />
      <input
        type="text"
        placeholder="Search an user"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-12 pl-10 pr-5 mt-30 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-indigo-500"
      />
    </div>
  );
}

export function MyInputBook({ query, onChange }: Props) {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      <Search className="absolute left-3 top-36 -translate-y-1/2 h-4 w-4 text-gray-500" />
      <input
        type="text"
        placeholder="Search a book"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-12 pl-10 pr-5 mt-30 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-indigo-500"
      />
    </div>
  );
}
