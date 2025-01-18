import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm">
      {/* Top Section */}
      <div className="flex items-center justify-between px-4 py-4 max-w-7xl mx-auto">
        {/* Hamburger Menu (Mobile View) */}
        <button
          className="block md:hidden p-2 hover:bg-gray-100 rounded-full"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>

        {/* Brand Name */}
        <h1 className="text-2xl font-light">Avion</h1>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Search className="w-5 h-5 text-gray-700" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <ShoppingCart className="w-5 h-5 text-gray-700" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <User className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200">
        <div className="md:flex hidden items-center justify-center px-4 max-w-7xl mx-auto">
          <ul className="flex items-center gap-8 py-4 text-sm text-gray-700">
            <li>
              <a className="hover:text-gray-900 transition-colors">
                Plant pots
              </a>
            </li>
            <li>
              <a className="hover:text-gray-900 transition-colors">Ceramics</a>
            </li>
            <li>
              <a className="hover:text-gray-900 transition-colors">Tables</a>
            </li>
            <li>
            <Link href={"/chairs"} className="hover:text-gray-900 transition-colors">Chairs</Link>  
            </li>
            <li>
              <a className="hover:text-gray-900 transition-colors">Crockery</a>
            </li>
            <li>
              <a className="hover:text-gray-900 transition-colors">Tableware</a>
            </li>
            <li>
              <a className="hover:text-gray-900 transition-colors">Cutlery</a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col items-start gap-4 py-4 px-4 text-sm text-gray-700">
              <li>
                <a className="hover:text-gray-900 transition-colors">
                  Plant pots
                </a>
              </li>
              <li>
                <a className="hover:text-gray-900 transition-colors">Ceramics</a>
              </li>
              <li>
                <a className="hover:text-gray-900 transition-colors">Tables</a>
              </li>
              <li>
                <a className="hover:text-gray-900 transition-colors">Chairs</a>
              </li>
              <li>
                <a className="hover:text-gray-900 transition-colors">
                  Crockery
                </a>
              </li>
              <li>
                <a className="hover:text-gray-900 transition-colors">
                  Tableware
                </a>
              </li>
              <li>
                <a className="hover:text-gray-900 transition-colors">
                  Cutlery
                </a>
              </li>
              <li>
                <div className="flex items-center gap-4 mt-4">
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Search className="w-5 h-5 text-gray-700" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <ShoppingCart className="w-5 h-5 text-gray-700" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <User className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}