"use client";
import React from "react";
import "./header.css";

function Header() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="header">
      <logo className="logo">vVv-logo</logo>
      <nav className="navigation">
        <ul className="menu">
          <li className="menu-item">
            <a href="#" onClick={() => scrollToSection("home")}>
              Home
            </a>
          </li>
          <li className="menu-item">
            <a href="#" onClick={() => scrollToSection("about")}>
              Quem somos
            </a>
          </li>
          <li className="menu-item">
            <a href="#" onClick={() => scrollToSection("team")}>
              Nosso time
            </a>
          </li>
          <li className="menu-item">
            <a href="#" onClick={() => scrollToSection("contacts")}>
              Entre em contato
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
