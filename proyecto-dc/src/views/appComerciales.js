/* eslint-disable react/prop-types */
import React from "react";
import "../components/comerciales.css";
import imagen1 from "../images/loginApp.png";
import imagen2 from "../images/agenciaApp.png";


const Card = ({ title, image, subtitle, text }) => {
  return (
    <div className="MaxiCard">
      <div className="card-content">
        <h2>{title}</h2>
        <p className="card-subtitle">{subtitle}</p>
        <a className="card-text" href="https://comercial.decreditos.com/" target="_blank" rel="noopener noreferrer">
          {text}
        </a>
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
      <Card
        title="El ingreso a la aplicacion de comerciales es con el mismo usuario y contraseña que utilizamos en S1 Ejecutivo "
        subtitle="Link para ingresar a App comerciales:"
        text="https://comercial.decreditos.com/"
        image={imagen1}
      />
      <Card
        title="Home de App de comerciales"
        subtitle="En el ingreso a la App, vamos a ver las agencias asignadas desde hubspot al comercial. 
        En la card de la agencia, podemos ver datos importantes como <estado de agencia>, <Fecha de ultima visita>,
        <Nombre completo>, <Direccion de agencia> <Ubicación (al clickear se abre en google maps)>.Ademas, al clickear
        sobre <mas información> accedes para ver mas datos o incluso realizar otras acciones."
        image={imagen2}
      />
    </div>
  );
};

export default tutorialesComerciales;
