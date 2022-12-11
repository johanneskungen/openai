import React from "react";
import "../styles/globals.css";
import Navbar from "./Navbar";

function layout({ children }) {
  return (
    <html>
      <head>
        <title>JE Consulting Agency</title>
      </head>
      <body className="body">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

export default layout;
