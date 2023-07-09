import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header className="p-5 bg-blue-400 flex justify-around">
      <Link
        href="/"
        className="px-2 py-1 bg-white text-blue-400 border-2 border-white rounded-md"
      >
        Home
      </Link>
      <Link
        href="/todos"
        className="px-2 py-1 bg-white text-blue-400 border-2 border-white rounded-md"
      >
        Todos
      </Link>
    </header>
  );
}

export default Header;
