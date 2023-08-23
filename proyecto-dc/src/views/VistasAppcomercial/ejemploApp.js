import React from "react";
import "../../components/tutoriales.css";
import { useNavigate } from "react-router-dom";
import videoEjemplo from "../../images/appComerVideo.mp4"; // Importar el video

const EjemploApp = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="titulos">
        Video de ejemplo de acciones en App Comerciales
      </h1>

      <div className="centered-container">
        <h2></h2>
        <p>
          En el siguiente video, podemos ver el ingreso a la app, las agencias
          asignadas al comercial, las ultimas visitas realizadas a la agencia,
          las ultimas operaciones ingresadas por la agencia, tareas dentro de la
          agencia, como asi tambien las tareas extras que se hacen por fuera de
          una agencia. A su vez, podemos ver como finalizar las tareas siempre y
          cuando se permanezca en la ubicacion de la tarea.
        </p>
        <video className="videoApp" width="30%" controls>
          <source src={videoEjemplo} type="video/mp4" />
          Tu navegador no soporta el elemento video.
        </video>
        <button className="btn-volver" onClick={() => navigate(-1)}>
          Volver
        </button>
      </div>
    </>
  );
};

export default EjemploApp;
