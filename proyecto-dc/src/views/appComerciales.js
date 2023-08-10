/* eslint-disable react/prop-types */
import React from "react";
import "../components/comerciales.css";
import imagen1 from "../images/loginApp.png";
import imagen2 from "../images/loginApp.png";


const Card = ({ title, image }) => {
  return (
    <div className="MaxiCard">
      <div className="card-content">
        <h2>{title}</h2>
      </div>
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};
const tutorialesComerciales = () => {
  return (
    <div>
      <h1 className="titulosComercial">
        En esta pagina vamos a ver tutoriales sobre App Comerciales
      </h1>
      <Card title="El ingreso a la aplicacion de comerciales es con el mismo usuario y contraseña que utilizamos en S1 Ejecutivo " image={imagen1} />
      <Card title="Título de la segunda tarjeta" image={imagen2} />
    </div>
  );
};

export default tutorialesComerciales;
