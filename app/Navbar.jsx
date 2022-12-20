"use client"

import React from "react";
import Link from "next/link";
import { useAiContext } from "./Context";

function Navbar() {
  const { aiResponses } = useAiContext();
  const list = [...new Set(aiResponses)];
  return (
    <nav className="bg-white items-center shadow-lg flex justify-between p-8 px-18">
      <Link href={"/"} className="font-bold sm:text-2xl text-5xl text-green-500">
        AiHelper
      </Link>
      <Link href="/answers" className="sm:text-xl text-3xl font-semibold">
        saved answers <span className="font-bold sm:text-xl text-3xl">{list ? list.length : '0'}</span>
      </Link>
      
    </nav>
  );
}

export default Navbar;
