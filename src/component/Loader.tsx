import React, { useState, useEffect } from "react";
import logo from "../logo.svg";
import "../asset/loader.css";

function App() {
  const [open, setOpen] = useState(false);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 2000);
    setTimeout(() => {
      setDisplay(true);
    }, 2500);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        display: display ? "none" : "",
      }}
    >
      <div
        className="loader-cover loader-cover-up"
        style={{
          transform: open ? "scaleY(0)" : "scaleY(1)",
          opacity: open ? 0 : 1,
        }}
      ></div>
      <div
        className="loader-cover loader-cover-down"
        style={{
          transform: open ? "scaleY(0)" : "scaleY(1)",
          opacity: open ? 0 : 1,
        }}
      ></div>
      <div
        className="App-header"
        style={{
          display: open ? "none" : "",
        }}
      >
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;
