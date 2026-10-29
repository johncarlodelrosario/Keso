"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/product" },
    { name: "Events", href: "/event" },
    { name: "Dealers", href: "/dealer" },
  ];

  return (
    <nav className="bg-kesor-purple/95 backdrop-blur-md text-white sticky top-0 z-50 shadow-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="group flex items-center">
              <div className="relative h-14 w-auto">
                <Image
                  src="/KESO_Graffiti_Emblem_Logo-removebg-preview.png"
                  alt="KESOR Logo"
                  width={180}
                  height={56}
                  className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 rounded-md text-sm font-bold uppercase tracking-wider text-gray-100 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
            {/* Desktop CTA */}
            <Link
              href="/contact"
              className="ml-4 bg-kesor-red hover:bg-red-700 text-white px-6 py-2.5 rounded-md font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-[0_0_15px_rgba(230,0,0,0.5)] hover:shadow-[0_0_25px_rgba(230,0,0,0.8)]"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button className="text-gray-300 hover:text-white">
              <Search size={22} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute w-full bg-kesor-dark border-b border-white/10 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-md text-base font-bold uppercase text-gray-200 hover:bg-kesor-purple hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 mt-4 text-center rounded-md text-base font-bold uppercase bg-kesor-red text-white shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
