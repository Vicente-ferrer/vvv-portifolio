import React from "react";
import "./header.css";
function header() {
  return (
    <div className="header">
      <logo className="logo">vVv-logo</logo>
      <nav className="navigation">
        <ul className="menu">
          <li className="menu-item">
            <a href="#">Home</a>
          </li>
          <li className="menu-item">
            <a href="#">Quem somos</a>
          </li>
          <li className="menu-item">
            <a href="#">Nosso time</a>
          </li>
          <li className="menu-item">
            <a href="#">Entre em contato</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default header;
