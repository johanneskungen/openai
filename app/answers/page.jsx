"use client";

import React from "react";
import { useAiContext } from "../Context";

function page() {
  const { aiResponses } = useAiContext();
  const list = [...new Set(aiResponses)];

  const map = ["I am doing well thank you", "My name is Kaitlyn"];

  return (
    <div>
      <div className="flex flex-col w-[85vw] mx-auto gap-2 mt-44">
        {list?.map((text) => (
          <p className="h-24 bg-white rounded-sm shadow-md text-2xl" key={text.length}>{text}</p>
        ))}
      </div>
    </div>
  );
}

export default page;
