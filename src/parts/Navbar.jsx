import React from 'react';
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-full px-4 py-2 flex h-[60px] items-center justify-between bg-blue-200 mb-12">
      
      <div className="mr-auto ml-7">
        <a href="/" className="ml-auto hover:opacity-60  ">
          <img src="/nizlogo.svg" alt="Logo" className="h-12 w-12 rounded-md" />
        </a>
      </div>
      
      <div className="flex gap-7 ml-auto mr-7 ">
        <a href="/about/" className="hover:opacity-60 font-bold text-lg">
          About
        </a>
        <a
          href="https://drive.google.com/file/d/1CG_1_6czo1jvsKKgYUlrKkAtKXenQZ8U/view"
          className="hover:opacity-60 font-bold text-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    </div>
  );
}