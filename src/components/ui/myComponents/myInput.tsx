import { Input } from "../input"
import { Search } from "lucide-react";

export function MyInputUser() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
      <Input
        type="search"
        placeholder="Search an user"
        className="w-full h-12 pl-10 mt-30"
      />
    </div>
  )
}


export function MyInputArticles() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
      <Input
        type="search"
        placeholder="Search an article"
        className="w-full h-12 pl-10 mt-30"
      />
    </div>
  )
}


