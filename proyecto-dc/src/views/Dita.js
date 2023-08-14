/* eslint-disable react/prop-types */
import "../components/dita.css";
import React, { useState } from "react";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <div className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <div className={`accordion-arrow ${isOpen ? "open" : ""}`} />
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

const tutoriales = () => {
  return (
    <div>
      <h1 className="titulos">
        En esta página vamos a ver tutoriales sobre Dita
      </h1>
      <Accordion title="Título del Acordeón 1">
        Contenido del acordeón 1.
      </Accordion>
      <Accordion title="Título del Acordeón 2">
        Contenido del acordeón 2.
      </Accordion>
    </div>
  );
};

export default tutoriales;
