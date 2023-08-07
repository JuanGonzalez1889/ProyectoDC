import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/menu";
import Inicio from "./views/inicio";
import Tutoriales from "./views/tutoriales";
import Contacto from "./views/contacto";
import VolverMenu from "./views/volverMenu";

const App = () => {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/tutoriales" element={<Tutoriales />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/volverMenu" element={<VolverMenu />} />
      </Routes>
    </Router>
  );
};

export default App;
