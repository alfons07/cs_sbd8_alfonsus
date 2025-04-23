import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-purple-700 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-3">
          <img
            src="/src/assets/smartfren-logo.svg"
            className="h-10"
          />
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <div className="space-x-6 hidden md:flex">
          <a href="#paket" className="hover:text-gray-300">Paket</a>
          <a href="#promo" className="hover:text-gray-300">Promo</a>
          <a href="#help" className="hover:text-gray-300">Help</a>
          <a href="#mysmartfren" className="hover:text-gray-300">MySmartfren</a>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="#paket" onClick={toggleMenu} className="block text-white">Paket</a>
          <a href="#promo" onClick={toggleMenu} className="block text-white">Promo</a>
          <a href="#help" onClick={toggleMenu} className="block text-white">Help</a>
          <a href="#mysmartfren" onClick={toggleMenu} className="block text-white">MySmartfren</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
