import React from "react";
import { ReactDOM } from "react";

function Header() {
  return (
    <header>
      <nav className="main-head">
        <img className="nav-logo" src="/logo.png" />
        <h3 className="nav-text">ReactFacts</h3>
        <h4 className="nav-title">React Project 1</h4>
        
      </nav>
    </header>
  );
}

export default Header