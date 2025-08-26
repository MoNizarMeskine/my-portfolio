import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="bg-black py-4 px-6 mb-12">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo or Name */}
        <NavLink to="/" className="text-white font-bold text-xl hover:opacity-60">
          Nizar
        </NavLink>

        {/* Links */}
        <div className="flex gap-6">
          <NavLink
            to="/about"
            className="text-white text-lg hover:opacity-60"
          >
            About
          </NavLink>

          <a
            href="https://drive.google.com/file/d/1N0w0AQXB1IxEJIwFqSqS1lqT8pOUh9HQ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-lg hover:opacity-60"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}