import React, { useState } from "react";
import "../components/onboardingComercial.css";
import myVideo from "../images/onboardingComercial.mp4";

const Tutoriales = () => {
  // Definimos el estado y los datos del Stepper
 const [activeStep, setActiveStep] = useState(null);
 const stepsData = [
   {
     title: "Inicio de sesión",
     content:
       "Debemos ingresar con el mismo usuario y contraseña que utilizamos en S1 ejecutivo",
   },
   {
     title: "Alta de agencia",
     content:
       "Al ingresar al onboarding comercial, vamos a clickear en Alta de Agencia",
   },
   {
     title: "Validación de Email",
     content:
       "Debemos ingresar el email de la agencia que queremos registrar. A ese mismo correo se envía un codigo de verificacion de 4 dígitos para validar el mismo",
   },
   {
     title: "Ingreso DNI",
     content:
       "Debemos ingresar el DNI del agenciero dueño de la empresa, al ingresar, hacemos una validación de datos con Nosis",
   },
   {
     title: "Validación Celular",
     content:
       "Debemos ingresar el celular del agenciero que queremos registrar. A ese mismo celular se envía un codigo de verificacion de 4 dígitos para validar el mismo",
   },
   {
     title: "Nombre Agencia",
     content: "Ingresar nombre real de la agencia que queremos registrar",
   },
   {
     title: "Ubicación Agencia",
     content:
       "Debemos geolocalizar la dirección exacta de la agencia a crear, con codigo postal y referencias extras para una ubicación mas precisa",
   },
   {
     title: "Selección Vendedor",
     content:
       "Selecciona del listado la zona a la cual pertenece esta agencia a crear",
   },
   {
     title: "AGENCIA CREADA!",
     content:
       "¡LISTO! Tu agencia fue registrada exitosamente. Recordá que estos datos se guardan automáticamente en Hubspot en la sucursal y zona correspondiente",
   },
 ];

  return (
    <div>
      <h1 className="titulos">
        En esta página vamos a ver tutorial sobre como crear Onboarding Comercial
      </h1>

      <div className="steps-container">
        {stepsData.map((step, index) => (
          <div
            className={`step ${activeStep === index ? "active" : ""}`}
            key={index}
            onClick={() => setActiveStep(index)}
          >
            <div className="step-number">{index + 1}</div>
            <div className="step-description">{step.title}</div>
          </div>
        ))}
      </div>

      {/* Sección para mostrar el contenido del step activo */}
      {activeStep !== null && (
        <div className="step-content">{stepsData[activeStep].content}</div>
      )}

      <video className="videoOb" width="100%" height="auto" controls>
        <source src={myVideo} type="video/mp4" />
        Tu navegador no soporta el elemento video.
      </video>
    </div>
  );
};

export default Tutoriales;
