import React, { useState } from "react";
import "./nav.css";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="container-logo-and-title">
        <img src="/logo/logo-beauty-studio.jpg" alt="Logo" className="logo" />
        <h1 className="title">Beauty Studio D'art</h1>
      </div>
      <div className="container-button-menu">
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <div className={`container-links ${menuOpen ? "open" : ""}`}>
        <a href="#inicio">Inicio</a>
        <a href="#servicios">Servicios</a>
        <a href="#precios">Precios</a>
        <a href="#footer">Contacto</a>
      </div>
    </nav>
  );
}

export default Nav;
