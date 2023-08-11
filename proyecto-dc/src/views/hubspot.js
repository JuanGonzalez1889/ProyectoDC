/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "../components/tutoriales.css";
import { Link } from "react-router-dom";
import imagen6 from "../images/imagen6.jpg";

// Componente Card
const Card = ({ title, image, linkTo }) => {
  return (
    <Link to={linkTo} onClick={() => console.log("Card clicked!")}>
      <div className="card">
        <img src={image} alt={title} />
        <h2>{title}</h2>
      </div>
    </Link>
  );
};

const Tutoriales = () => {
  const cards = [
    {
      title: "Asignar contacto a empresa",
      image: imagen6,
      linkTo: "/asignarContacto",
    },
    {
      title: "Asignar empresa a comercial",
      image: imagen6,
      linkTo: "/asignarEmpresa",
    },
    {
      title: "Buscar empresas con filtros",
      image: imagen6,
      linkTo: "/crearListados",
    },
    { title: "Crear listados", image: imagen6, linkTo: "/crearListados" },
    { title: "Crear tareas", image: imagen6, linkTo: "/crearTareas" },
    {
      title: "Registrar una visita",
      image: imagen6,
      linkTo: "/registrarVisita",
    },
    {
      title: "Registrar una llamada",
      image: imagen6,
      linkTo: "/registrarLlamada",
    },
    {
      title: "Modificar propiedades",
      image: imagen6,
      linkTo: "/modificarPropiedad",
    },
    {
      title: "Visualizacion de todas las propiedades",
      image: imagen6,
      linkTo: "/visualizacionPropiedades",
    },
    {
      title: "Visualizacion de op y negocios",
      image: imagen6,
      linkTo: "/visualizacionOp",
    },
  ];
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda

  const filteredCards = cards.filter(
    (card) => card.title.toLowerCase().includes(searchTerm.toLowerCase()) // Filtrado insensible a mayúsculas/minúsculas
  );

  return (
    <div>
      <h1 className="titulos">
        En esta página vamos a ver tutoriales sobre Hubspot
      </h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar por título..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && <button onClick={() => setSearchTerm("")}>X</button>}
      </div>
      <div className="gallery">
        {filteredCards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            image={card.image}
            linkTo={card.linkTo}
          />
        ))}
      </div>

      <div className="youtube">
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/kK7ywqAB49s"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default Tutoriales;
