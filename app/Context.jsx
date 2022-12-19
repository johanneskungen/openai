"use client";

import React, { createContext, useState } from "react";
import { useContext } from "react";

export const AiContext = createContext();

export const Context = ({ children }) => {

  const [aiResponses, setAiResponses] = useState([])

  const value = {setAiResponses, aiResponses}
  return <AiContext.Provider value={value}>
    {children}
  </AiContext.Provider>;
};

export const useAiContext = () => useContext(AiContext)
