import React from "react";

const Header = () => {
  return (
    <header className=" bg-purple-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">MyLogo</h1>
        </div>
        <nav className="flex space-x-4">
          <a href="#" className="hover:text-blue-200">
            Home
          </a>
          <a href="#" className="hover:text-blue-200">
            Products
          </a>
          <a href="#" className="hover:text-blue-200">
            About
          </a>
          <a href="#" className="hover:text-blue-200">
            Contact
          </a>
        </nav>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-r-lg">
            Search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
