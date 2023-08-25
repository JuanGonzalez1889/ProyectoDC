import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./menu.css";
import profilePic from "../images/avatar.png";
import logoPic from "../images/decreditos-s1.png";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    setIsOpen(false); // Cierra el menú después de hacer clic en un enlace
  };

  return (
    <>
      <div className="menu-button" onClick={() => setIsOpen(!isOpen)}></div>

      <nav className={isOpen ? "open" : ""}>
        <div className="logo-container">
          <img src={logoPic} alt="Logo" />
        </div>
        <div className="profile">
          <img src={profilePic} alt="Perfil" />
        </div>
        <ul>
          <li>
            <Link to="/" onClick={handleLinkClick}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/hubspot" onClick={handleLinkClick}>
              Tutorial Hubspot
            </Link>
          </li>
          <li>
            <Link to="/appComerciales" onClick={handleLinkClick}>
              Tutorial App Comerciales
            </Link>
          </li>
          <li>
            <Link to="/obComercial" onClick={handleLinkClick}>
              Tutorial Ob. Comercial
            </Link>
          </li>
          <li>
            <Link to="/obTradicional" onClick={handleLinkClick}>
              Tutorial Ob. Tradicional
            </Link>
          </li>
          <li>
            <Link to="/dita" onClick={handleLinkClick}>
              Tutorial Dita
            </Link>
          </li>
          <li>
            <Link to="/dito" onClick={handleLinkClick}>
              Tutorial Dito
            </Link>
          </li>
          <li>
            <Link to="/volverMenu" onClick={handleLinkClick}>
              Volver al Menú
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
