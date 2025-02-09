import React from "react";

function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 fixed top-0 w-full">
      <div className="ml-auto">
        <a href="/about" className="text-gray-800 font-bold">
          About
        </a>
      </div>
    </header>
  );
}

export default Header;
