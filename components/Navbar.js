"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons for menu toggle

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // About dropdown state
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Prevents mismatch during SSR

  return (
    <nav className="bg-white/90 backdrop-blur-lg shadow-md sticky w-full top-0 z-50">
      {/* Logo & Heading Section */}
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image
              src="/Logo_edited.png"
              alt="SLCR Logo"
              width={160}
              height={50}
            />
          </Link>
          <h1 className="text-xl md:text-5xl font-extrabold text-blue-600 md:block">
            Smart Laboratory on Clean River
          </h1>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-blue-700"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Navigation Menu - Desktop */}
      <div className="border-t border-gray-200 bg-blue-600">
        <ul className="hidden md:flex justify-center space-x-10 text-lg font-semibold text-gray-100 py-3">
          {/* Home */}
          <li>
            <Link
              href="/"
              className="relative px-4 py-2 transition-all duration-300 hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </Link>
          </li>

          {/* About Dropdown Menu */}
          <li
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={(e) => {
              if (!e.relatedTarget?.closest(".dropdown-menu")) {
                setIsDropdownOpen(false);
              }
            }}
          >
            <button className="relative px-4 py-auto transition-all duration-300 hover:text-white">
              About
            </button>

            {/* Modern Dropdown */}
            <ul
              className={`dropdown-menu absolute left-0 mt-2 w-52 bg-white text-gray-800 shadow-lg rounded-lg border border-gray-200 overflow-hidden 
      transform transition-all duration-300 ease-in-out 
      ${
        isDropdownOpen
          ? "opacity-100 translate-y-0 visible"
          : "opacity-0 -translate-y-2 invisible"
      }`}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <li className="px-5 py-3 hover:bg-gray-100 transition-all duration-200">
                <Link href="/about/slcr">SLCR</Link>
              </li>
              <li className="px-5 py-3 hover:bg-gray-100 transition-all duration-200">
                <Link href="/about/partner">Partner Institutes</Link>
              </li>
            </ul>
          </li>

          {/* Other Links */}
          {[
            "Activities",
            "Projects",
            "Event",
            "Data",
            "Gallery",
            "Contact",
          ].map((item, index) => (
            <li key={index}>
              <Link
                href={`/${item.toLowerCase()}`}
                className="relative px-4 py-2 transition-all duration-300 hover:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100/95 backdrop-blur-lg shadow-lg absolute top-full left-0 w-full animate-fade-in">
          <ul className="flex flex-col text-lg font-medium text-gray-800 space-y-2 py-4">
            {/* Home */}
            <li className="px-6 py-3 border-b border-gray-300">
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>

            {/* Mobile About Dropdown */}
            <li className="px-6 py-3 border-b border-gray-300">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full text-left"
              >
                About
              </button>
              {isDropdownOpen && (
                <ul className="mt-2 ml-4 border-l border-gray-400 pl-4">
                  <li className="py-1">
                    <Link href="/about/team" onClick={() => setIsOpen(false)}>
                      Our Team
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link
                      href="/about/company"
                      onClick={() => setIsOpen(false)}
                    >
                      Our Company
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Other Links */}
            {[
              "Activities",
              "Projects",
              "Event",
              "Data",
              "Gallery",
              "Contact",
            ].map((item, index) => (
              <li key={index} className="px-6 py-3 border-b border-gray-300">
                <Link
                  href={`/${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
