import React, { useState } from "react";
import Navbar from "./Navbar";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "1.5rem", margin: "0 auto", maxWidth: "1300px" }}>
        <h1>Navigation Bar</h1>
        <p>
          Want to learn how to make this?{" "}
          <a
            style={{ textDecoration: "underline", color: "var(--primary-color)" }}
            href="https://www.freecodecamp.org/news/how-to-build-a-responsive-navigation-bar-with-dropdown-menu-using-javascript/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the tutorial
          </a>
        </p>
      </main>
    </>
  );
}

export default App;
