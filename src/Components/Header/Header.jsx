import React from "react";
import "./Header.css";
import Toggle from "../Toggle/Toggle";

function Header() {
  return (
    <header className="header-container">
      <div className="container-inner">
        <h1 className="header-title">Where in the world?</h1>
        <Toggle />
      </div>
    </header>
  );
}

export default Header;
