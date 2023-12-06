import React, { useState } from 'react';

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <button
        className="fixed top-5 left-5 z-50 block md:hidden"
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
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
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center">
          <div className="bg-white w-4/5 h-full max-w-xs absolute left-0 transform translate-x-full z-50">
            {/* Close Button */}
            <button
              className="absolute top-5 right-5"
              onClick={closeMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {/* Your navigation links here */}
            <ul className="mt-10">
              <li className="py-2">Link 1</li>
              <li className="py-2">Link 2</li>
              <li className="py-2">Link 3</li>
              {/* Add more links as needed */}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavigation;
