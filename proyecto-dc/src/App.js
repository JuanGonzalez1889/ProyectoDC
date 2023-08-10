import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/menu";
import Inicio from "./views/inicio";
import S1Ejecutivo from "./views/s1Ejecutivo";
import Contacto from "./views/contacto";
import VolverMenu from "./views/volverMenu";
import Webagencias from "./views/webag";
import Hubspot from "./views/hubspot";
import AppComerciales from "./views/appComerciales";
import ObComercial from "./views/obComercial";
import ObTradicional from "./views/obTradicional";
import Dito from "./views/dito";
import Dita from "./views/Dita";

const App = () => {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/s1Ejecutivo" element={<S1Ejecutivo />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/volverMenu" element={<VolverMenu />} />
        <Route path="/webag" element={<Webagencias />} />
        <Route path="/hubspot" element={<Hubspot />} />
        <Route path="/appComerciales" element={<AppComerciales />} />
        <Route path="/obComercial" element={<ObComercial />} />
        <Route path="/obTradicional" element={<ObTradicional />} />
        <Route path="/Dita" element={<Dita />} />
        <Route path="/dito" element={<Dito />} />
      </Routes>
    </Router>
  );
};

export default App;
