import React, { useState } from "react";
import "../style/header.css";
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <h1 className="logo">
        <a href="/">MovieScope</a>
      </h1>

      <div
        className={`menu-toggle ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`nav ${isOpen ? "show" : ""}`}>
        <a href="/">Accueil</a>
        <a href="/movies">Movies</a>
        <a href="/apropos">A propos</a>
      </nav>
    </header>
  );
}

export default Header;
