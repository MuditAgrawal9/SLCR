"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons for menu toggle

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-lg shadow-md sticky w-full top-0 z-50">
      {/* Logo & Heading Section */}
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image src="/Logo_edited.png" alt="SLCR Logo" width={160} height={50} />
          </Link>
          <h1 className="text-1xl md:text-5xl font-extrabold text-blue-700 md:block">
            Smart Laboratory on Clean River
          </h1>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-blue-700">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Navigation Menu - Positioned Below */}
      <div className="border-t border-gray-200 bg-blue-600">
        <ul className="hidden md:flex justify-center space-x-8 text-lg font-semibold text-gray-100 py-3">
          {["Home", "About", "Activities", "Projects", "Event", "Data", "Gallery", "Contact"].map(
            (item, index) => (
              <li key={index}>
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="relative px-4 py-2 transition-all duration-300 hover:text-white 
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
                  after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100/95 backdrop-blur-lg shadow-lg absolute top-full left-0 w-full animate-fade-in">
          <ul className="flex flex-col text-lg font-medium text-gray-800 space-y-2 py-4">
            {["Home", "About", "Activities", "Projects", "Event", "Data", "Gallery", "Contact"].map(
              (item, index) => (
                <li key={index} className="px-6 py-3 border-b border-gray-300">
                  <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
