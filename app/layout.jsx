import React from "react";
import "../styles/globals.css";
import { Context } from "./Context";
import Navbar from "./Navbar";

function layout({ children }) {
  return (
    <html>
      <head>
        <title>Javascript Problem Solver</title>
      </head>
      <body className="body">
        <Context>
          <Navbar />
        {children}
        </Context>
      </body>
    </html>
  );
}

export default layout;
