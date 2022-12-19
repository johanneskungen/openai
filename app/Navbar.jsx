"use client"

import React from "react";
import Link from "next/link";
import { useAiContext } from "./Context";

function Navbar() {
  const { aiResponses } = useAiContext();
  const list = [...new Set(aiResponses)];
  return (
    <nav className="bg-white items-center shadow-lg flex justify-between p-6 px-12">
      <Link href={"/"} className="font-bold text-xl text-green-500">
        AiHelper
      </Link>
      <Link href="/answers" className="text-xl font-semibold">
        saved answers <span className="absolute right-6 font-bold text-xl">{list ? list.length : '0'}</span>
      </Link>
      
    </nav>
  );
}

export default Navbar;
