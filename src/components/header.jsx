import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 fixed top-0 w-full">
      <div className="ml-auto">
        <Link to="/about-page" className="text-gray-800 font-bold">
          About
        </Link>
      </div>
    </header>
  );
}

export default Header;
