"use client"

import React from "react";
import AiComponent from "./AiComponent";
import { useAiContext } from "./Context";

function page() {

  const value = useAiContext()

  return (
    <div>
      <AiComponent />
    </div>
  );
}

export default page;