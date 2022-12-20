"use client";

import React from "react";
import { useAiContext } from "../Context";

function page() {
  const { aiResponses } = useAiContext();
  const list = [...new Set(aiResponses)];

  const map = ["I am doing well thank you", "My name is Kaitlyn"];

  return (
    <div>
      <div className="flex flex-col w-[85vw] mx-auto gap-4 mt-44">
        {list.reverse()?.map((text) => (
          <p className="aiOutput min-h-24 bg-white rounded-md shadow-md text-2xl p-2 overflow-hidden" key={text.length}>{text}</p>
        ))}
      </div>
    </div>
  );
}

export default page;
