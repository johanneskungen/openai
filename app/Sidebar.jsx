"use client";

import React from "react";
import { motion } from "framer-motion";
import { useAiContext } from "./Context";
import { AiFillDelete, AiOutlineClose } from "react-icons/ai";

function Sidebar() {
  const { setSidebarOpen } = useAiContext();
  const res = window.localStorage.getItem("responses") ? JSON.parse(window.localStorage.getItem("responses")): []

  const clear = () => {
    window.localStorage.setItem("responses", [])
    setSidebarOpen(false)
  }

  return (
  <motion.div initial={{ x: 1000}} animate={{x: 0, transition: { bounce: "spring" }}} className="text-white absolute top-0 right-0 shadow-md min-h-screen bg-[#08131d] 2xl:w-[35vw] w-[27vw] xl:w-[32vw]">
    <h1 className="m-8 font-bold text-xl">Your saved questions</h1>
    <div className="flex gap-6 flex-col">
      {res && res.reverse().map((q, i) => (
        <div key={`item ${i}`} className="mx-6">
          <p className="font-semibold text-red-500 mx-2">{"answer"}</p>
          <p className="mx-8">{q}</p>
        </div>
      ))}
    </div>
    <div className="flex gap-10 w-fit mx-auto my-24">
      <button
        onClick={clear}
        className="bg-white text-black px-4 py-2 rounded-sm shadow-lg font-semibold"
      >
        <AiFillDelete size={32} />
      </button>
      <button
        onClick={() => setSidebarOpen(false)}
        className="bg-white text-black px-4 py-2 rounded-sm shadow-lg font-semibold"
      >
        <AiOutlineClose size={32} />
      </button>
    </div>
  </motion.div>
  );
}

export default Sidebar;
