"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-lg sm:text-xl font-bold text-blue-600">
            White Butterfly
          </h1>
        </Link>

        {/* Desktop Menu */}
        {/* <nav className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
        </nav> */}

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="mailto:buy@white-butterfly-enterprises.com"
            className="text-blue-600 hover:underline text-xs"
          >
            buy@white-butterfly-enterprises.com
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {/* {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-4 bg-white">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Enquiry
          </button>
        </div>
      )} */}
    </header>
  );
}
