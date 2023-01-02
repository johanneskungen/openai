"use client"

import React from "react";
import AiComponent from "./AiComponent";
import Sidebar from "./Sidebar";
import { useAiContext } from "./Context";

function page() {
  const { sidebarOpen } = useAiContext();
  return (
    <div>
      <AiComponent />
      {sidebarOpen && <Sidebar />}
    </div>
  );
}

export default page;