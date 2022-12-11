import React from "react";
import "../styles/globals.css";
import Navbar from "./Navbar";

function layout({ children }) {
  return (
    <html>
      <head></head>
      <body className="body">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

export default layout;
