import React from "react";
import "../components/tutoriales.css";

const Tutoriales = () => {
  return (
    <div>
      <h1 className="titulos">
        En esta página vamos a ver tutoriales sobre S1 Ejecutivo
      </h1>
      <div className="iframe-container">
        <iframe
          style={{ border: "none" }}
          width="800"
          height="450"
          src="https://whimsical.com/embed/MhGfBviVnHtagVCHN5WyaM@VsSo8s35WwPijVA2G7SG4Q"
          title="Tutorial S1 Ejecutivo"
        />
      </div>
    </div>
  );
};

export default Tutoriales;
