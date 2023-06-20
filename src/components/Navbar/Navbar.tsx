import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-6 bg-zinc-950  ">
      
      <ul className="flex space-x-4">
          <li>
          <a href="/" className="font-bold text-white hover:text-gray-300 mr-10">Home</a>

            <a href="/join" className="font-bold text-white hover:text-gray-300">Join the team</a>
          </li>
        </ul>
    </nav>
  );
};

export default Navbar;
