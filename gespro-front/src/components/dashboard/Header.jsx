import { useState } from "react";

export default function Header() {
  const [search, setSearch] = useState("");

  return (
    <header className="sticky top-0 z-0 w-full bg-white border-b border-gray-200">
      <nav className="flex items-center justify-between px-4 py-3 sm:px-6 lg:ps-64">
        <div className="hidden md:block relative w-full max-w-md mx-auto">
          <input
            type="text"
            placeholder="Rechercher..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 pl-10 text-sm bg-white border border-gray-200 rounded-lg"
          />
          <div className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              className="w-9 h-9 rounded-full"
              src="../logo.png"
              alt="avatar"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
