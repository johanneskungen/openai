import React from "react";
import "../styles/globals.css";

function layout({ children }) {
  return (
    <html>
      <head>
        <title>Javascript Problem Solver</title>
      </head>
      <body className="body">
        {children}
      </body>
    </html>
  );
}

export default layout;
