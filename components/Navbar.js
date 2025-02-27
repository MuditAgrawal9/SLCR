"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

/* Individual Navigation Item */
const NavItem = ({ href, text }) => (
  <li>
    <Link
      href={href}
      className="relative px-4 py-2 transition-all duration-300 text-gray-100 hover:text-white
               after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white 
               after:transition-all after:duration-300 hover:after:w-full"
    >
      {text}
    </Link>
  </li>
);

/* Dropdown Component */

const Dropdown = ({ label, children, isOpen, setIsOpen, type }) => (
  <li
    className="relative group"
    onMouseEnter={() => setIsOpen((prev) => ({ ...prev, [type]: true }))}
    onMouseLeave={() => setIsOpen((prev) => ({ ...prev, [type]: false }))}
  >
    <button className="flex items-center gap-2 px-4 py-auto text-gray-100 transition-all duration-300 hover:text-white">
      {label}
      <ChevronDown
        size={16}
        className={`transition-transform duration-300 ${
          isOpen ? "rotate-180" : "rotate-0"
        }`}
      />
    </button>

    <AnimatePresence>
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute left-0 mt-2 w-90 bg-white shadow-lg rounded-xl border border-gray-200 overflow-hidden"
        >
          {children}
        </motion.ul>
      )}
    </AnimatePresence>
  </li>
);

/* Dropdown Item */
const DropdownItem = ({ href, text }) => (
  <li>
    <Link
      href={href}
      className="block px-5 py-3 text-blue-600 hover:bg-blue-50 transition-all duration-300  whitespace-nowrap"
    >
      {text}
    </Link>
  </li>
);

/* Mobile Navigation Item */
const MobileNavItem = ({ href, text, setIsOpen }) => (
  <li className="px-6 py-3 border-b border-gray-300">
    <Link href={href} onClick={() => setIsOpen(false)}>
      {text}
    </Link>
  </li>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    about: false,
    projects: false,
    activities: false,
  });

  // Fix hydration issues in Next.js
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;

  return (
    <nav className="bg-white/90 backdrop-blur-lg shadow-md sticky top-0 z-50 w-full">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo & Title */}
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image
              src="/Logo_edited.png"
              alt="SLCR Logo"
              width={160}
              height={50}
            />
          </Link>
          <h1 className="text-xl md:text-4xl font-bold text-blue-600">
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

      {/* Desktop Navigation */}
      <div className="border-t border-gray-200 bg-blue-600">
        <ul className="hidden md:flex justify-center space-x-10 text-lg font-semibold text-gray-100 py-3">
          <NavItem href="/" text="Home" />
          <Dropdown
            label="About"
            isOpen={isDropdownOpen.about}
            setIsOpen={setIsDropdownOpen}
            type="about"
          >
            <DropdownItem href="/about/slcr" text="SLCR" />
            <DropdownItem href="/about/partner" text="Partner Institutes" />
          </Dropdown>
          <NavItem href="/secretariat" text="Secretariat" />
          <Dropdown
            label="Projects"
            href="/projects"
            isOpen={isDropdownOpen.projects}
            setIsOpen={setIsDropdownOpen}
            type="projects"
          >
            <DropdownItem href="/projects/project1" text="DSS-WRM" />
            <DropdownItem
              href="/projects/project2"
              text="Fingerprint Analysis"
            />
            <DropdownItem
              href="/projects/project3"
              text="Hydrological Modelling of Varuna"
            />
          </Dropdown>
          <Dropdown
            label="Activities"
            isOpen={isDropdownOpen.activities}
            setIsOpen={setIsDropdownOpen}
            type="activities"
          >
            <DropdownItem href="/activities/rhar" text="RHAR 2025" />
            <DropdownItem
              href="/activities/peoples_varuna"
              text="People’s Varuna"
            />
          </Dropdown>
          <NavItem href="/data" text="Data" />
          <NavItem href="/media" text="Media" />
          <NavItem href="/gallery" text="Gallery" />
          <NavItem href="/contact" text="Contact Us" />
        </ul>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-gray-100/95 backdrop-blur-lg shadow-lg absolute top-full left-0 w-full"
          >
            <ul className="flex flex-col text-lg font-medium text-gray-800 space-y-2 py-4">
              <MobileNavItem href="/" text="Home" setIsOpen={setIsOpen} />
              <MobileNavItem
                href="/secretariat"
                text="Secretariat"
                setIsOpen={setIsOpen}
              />
              <MobileNavItem href="/data" text="Data" setIsOpen={setIsOpen} />
              <MobileNavItem href="/media" text="Media" setIsOpen={setIsOpen} />
              <MobileNavItem
                href="/gallery"
                text="Gallery"
                setIsOpen={setIsOpen}
              />
              <MobileNavItem
                href="/contact"
                text="Contact Us"
                setIsOpen={setIsOpen}
              />
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
