"use client";

import React from "react";
import { useAiContext } from "./Context";

function Sidebar() {
  const { aiResponses, setAiResponses, setSidebarOpen } = useAiContext();
  const list = [...new Set(aiResponses)];
  return (
    <div className="text-white absolute top-0 right-0 shadow-md h-screen bg-[#08131d] w-[45vw]">
      <h1 className="m-8 font-bold text-xl">Your saved questions</h1>
      <div className="flex gap-6 flex-col">
        {list.map((q, i) => (
          <div>
            <p className="italic mx-2">{"answer " + (i + 1)}</p>
            <p className="mx-8">{q}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-10 w-fit mx-auto my-24">
        <button onClick={() => setAiResponses([])} className="bg-white text-black px-4 py-2 rounded-sm shadow-lg font-semibold">clear answers</button>
        <button onClick={() => setSidebarOpen(false)} className="bg-white text-black px-4 py-2 rounded-sm shadow-lg font-semibold">close sidebar</button>
      </div>
    </div>
  );
}

export default Sidebar;
