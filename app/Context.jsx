"use client";

import React, { createContext, useState } from "react";
import { useContext } from "react";

export const AiContext = createContext();

export const Context = ({ children }) => {

  const [aiResponses, setAiResponses] = useState([])
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const value = {setAiResponses, aiResponses, sidebarOpen, setSidebarOpen}
  return <AiContext.Provider value={value}>
    {children}
  </AiContext.Provider>;
};

export const useAiContext = () => useContext(AiContext)
