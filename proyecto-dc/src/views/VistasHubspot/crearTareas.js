/* eslint-disable react/prop-types */
import React from "react";
import "../../components/vistasHs.css";
import { useNavigate } from "react-router-dom";

const videoHsYoutube = () => {
  const navigate = useNavigate();
  const youtubeVideoID = "0OBnc7nQuG4"; // Cambia esto por la ID de tu video de YouTube

  return (
    <div>
      <h1 className="titulos">Crear tareas</h1>

      <div className="videoContainerHS">
        <iframe
          className="videoHS"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${youtubeVideoID}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <button className="btn-volver" onClick={() => navigate(-1)}>
        Volver
      </button>
    </div>
  );
};

export default videoHsYoutube;
