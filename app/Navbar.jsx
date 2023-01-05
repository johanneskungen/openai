"use client"

import React from "react";
import Link from "next/link";
import { useAiContext } from "./Context";
import { GiHamburgerMenu } from 'react-icons/gi'



function Navbar() {
  const { setSidebarOpen } = useAiContext();
  return (
    <nav className="items-center flex justify-between p-8 px-18">
      <Link href={"/"} className="font-bold sm:text-2xl text-5xl text-red-500">
        Terroscope
      </Link>
      <Link href="#" onClick={() => setSidebarOpen(prev => !prev)} className="sm:text-xl text-red-500 text-3xl font-semibold">
        <GiHamburgerMenu size={30}/>
        <div className="absolute top-6 right-[1.7rem] text-sm">{}</div>
      </Link>
      
    </nav>
  );
}

export default Navbar;
