import React from "react";
import { Link } from "react-router-dom";
import "./menu.css";
import profilePic from "../images/avatar.png";
import logoPic from "../images/decreditos-s1.png";

const Menu = () => {
  return (
    <nav>
      <div className="logo-container">
        <img src={logoPic} alt="Logo" />
      </div>
      <div className="profile">
        <img src={profilePic} alt="Perfil" />
      </div>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/webag">Tutorial Web agencias</Link>
        </li>
        <li>
          <Link to="/s1ejecutivo">Tutorial S1 Ejecutivo</Link>
        </li>
        <li>
          <Link to="/hubspot">Tutorial Hubspot</Link>
        </li>
        <li>
          <Link to="/appComerciales">Tutorial App Comerciales</Link>
        </li>
        <li>
          <Link to="/obComercial">Tutorial Ob. Comercial</Link>
        </li>
        <li>
          <Link to="/obTradicional">Tutorial Ob. Tradicional</Link>
        </li>
        <li>
          <Link to="/dita">Tutorial Dita</Link>
        </li>
        <li>
          <Link to="/dito">Tutorial Dito</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li>
          <Link to="/volverMenu">Volver al Menú</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
