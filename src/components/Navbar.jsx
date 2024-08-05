import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {/* <h1 className="text-2xl font-bold">Logo</h1> */}
            </div>
          </div>
          <div className="hidden md:flex justify-center flex-grow">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to='/blog' className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Blog</Link>
              <Link to='/faq' className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">FAQ</Link>
              <Link to='/profile' className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Profile</Link>
              <Link to='/activities' className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Activity</Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <FaBars className="block h-6 w-6" />
              ) : (
                <FaTimes className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to='/blog' className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Blog</Link>
          <Link to='/faq' className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">FAQ</Link>
          {/* <Link to='/profile' className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Profile</Link>
          <Link to='/activities' className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Activity</Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
