import logo from "./logo.svg";
import "./App.css";



import InicioPagina from './paginas/InicioPagina';
import MercaderiaPagina from './paginas/MercaderiaPagina';
import ContactoPagina from './paginas/ContactoPagina';
import LanzamientoPagina from './paginas/LanzamientoPagina';

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Menu from "./componentes/Menu";

function App() {
  return (
    <>
      <Router>
        <Menu />
        <div className="container">
          <Routes>
            <Route path="/" element={<InicioPagina />} />
            <Route path="/mercaderia" element={<MercaderiaPagina />} />
            <Route path="/contactos" element={<ContactoPagina />} />
            <Route path="/lanzamientos" element={<LanzamientoPagina/>} />

          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
