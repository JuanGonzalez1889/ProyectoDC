/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom"; // Importa Link
import "../components/comerciales.css";
import imagen1 from "../images/loginApp.png";
import imagen2 from "../images/agenciaApp.png";
import imagen3 from "../images/agenciaApp1.png";

const Card = ({ title, image, subtitle, text, list, linkTo }) => {
  return (
    <div className="MaxiCard">
      <div className="card-content">
        <h2>{title}</h2>
        <p className="card-subtitle">{subtitle}</p>
        <a
          className="card-text"
          href="https://comercial.decreditos.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </a>
        <ul className="card-listado">
          {list && list.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
        {linkTo && (
          <Link className="card-text" to={linkTo}>
            Video de ejemplo
          </Link>
        )}
      </div>
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

const listItems = [
  "Detalles de la Agencia: Informacion completa de agencia con sus contactos, y posibilidad de Actualizar coordenadas",
  "Últimas Visitas Registradas: Un historial de las visitas más recientes realizadas a la agencia, con detalles como fechas, participantes y descripción de la visita",
  "Últimas Operaciones Ingresadas: Un listado de las operaciones más recientes de la agencia, incluyendo una descripción detallada, fechas y sus estados actuales.",
  "Crear Visitas y Tareas: Una herramienta interactiva que permite registrar nuevas visitas, y además crear nuevas tareas dentro de la agencia",
  "Cabe recordar que toda esta información se obtiene desde Hubspot, es por eso que debe mantenerse actualizado",
];

const tutorialesComerciales = () => {
  return (
    <div>
      <h1 className="titulosComercial">
        En esta página vamos a ver tutoriales sobre App Comerciales
      </h1>
      <Card
        title="El ingreso a la aplicacion de comerciales es con el mismo usuario y contraseña que utilizamos en S1 Ejecutivo "
        subtitle="Link para ingresar:"
        text="Click para ir a la App Comerciales"
        image={imagen1}
      />
      <Card
        title="Home de App de comerciales"
        subtitle="En el ingreso a la App, vamos a ver las agencias asignadas desde hubspot al comercial. En la card de la agencia, podemos ver datos importantes como estado de agencia, Fecha de última visita, Nombre completo, Dirección de agencia, Ubicación (al clickear se abre en google maps). Además, al clickear sobre más información accedes para ver más datos o incluso realizar otras acciones."
        image={imagen2}
      />
      <Card
        title="Al ingresar a la agencia podemos ver la siguiente información:"
        list={listItems}
        linkTo="/ejemploApp" // Asegúrate de actualizar esto con la ruta correcta
        image={imagen3}
      />
    </div>
  );
};

export default tutorialesComerciales;