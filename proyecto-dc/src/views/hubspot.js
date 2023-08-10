/* eslint-disable react/prop-types */
import React from "react";
import "../components/tutoriales.css";
/*import imagen1 from "../images/imagen1.jpeg";
import imagen2 from "../images/imagen2.jpeg";
import imagen3 from "../images/imagen3.jpeg";
import imagen4 from "../images/imagen4.jpg";
import imagen5 from "../images/imagen5.jpg";*/
import imagen6 from "../images/imagen6.jpg";


 // Componente Card
  const Card = ({ title, image }) => {
    return (
      <div className="card">
        <img src={image} alt={title} />
        <h2>{title}</h2>
      </div>
    );
  };
  
const Tutoriales = () => {
  const cards = [
    { title: "Asignar contacto a empresa", image: imagen6 },
    { title: "Asignar empresa a comercial", image: imagen6 },
    { title: "Buscar empresas con filtros", image: imagen6 },
    { title: "Crear listados", image: imagen6 },
    { title: "Crear tareas", image: imagen6 },
    { title: "Registrar una visita", image: imagen6 },
    { title: "Registrar una llamada", image: imagen6 },
    { title: "Modificar propiedades", image: imagen6 },
    { title: "Visualizacion de todas las propiedades", image: imagen6 },
    { title: "Visualizacion de op y negocios", image: imagen6 },
  ];

 
  return (
    <div>
      <h1 className="titulos">
        En esta página vamos a ver tutoriales sobre Hubspot
      </h1>
      <div className="gallery">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} image={card.image} />
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
