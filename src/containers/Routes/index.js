// TODO: Mover Routes para uma pasta chamada features ou containers
// A pasta components é utilizada para componentes reutilizaveis e "menores", features/containers são como "pais"
// possuem a maior parte das logicas e requisções ao back-end, passando para os components.

// TODO: Adicionar um export default em cada um dos componentes, e importar de forma absoluta(sem as chaves)
import React from "react";
import { Routes, Route } from "react-router-dom";
import  Home from '../home'
import  Destinations  from "../destination";
import  Crew  from "../crew";
import  Technology  from "../technology";

const PagesRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destination" element={<Destinations />} />
      <Route path="/crew" element={<Crew />} />
      <Route path="/technology" element={<Technology />} />
    </Routes>
  );
};

export default PagesRoutes;
