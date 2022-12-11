"use client";

import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav
      id="nav"
      className="w-[100vw] bg-[#162D39] md:px-24 px-8 flex justify-between items-center h-[5.7rem] text-white"
    >
      <Link
        href={"/"}
        className="nav_header font-bold text-2xl flex items-center hover:text-[#ff3471] duration-150"
      >
        JeConsulting
      </Link>
      <section className="gap-12 font-semibold items-center flex">
        <Link href="/#work" className="hover:text-[#ff3471] duration-150">
          projects
        </Link>
        <Link className="hover:text-[#ff3471] duration-150" href="/about">
          about
        </Link>
        <Link className="hover:text-[#ff3471] duration-150" href="/#contact">
          contact
        </Link>
      </section>
    </nav>
  );
}

export default Navbar;
