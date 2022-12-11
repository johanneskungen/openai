import React from "react";
import "../styles/globals.css";
import Navbar from "./Navbar";

function layout({ children }) {
  return (
    <main>
      <title></title>
      <body className="body">
        <Navbar />
        {children}
      </body>
    </main>
  );
}

export default layout;
