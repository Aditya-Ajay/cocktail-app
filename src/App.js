import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CocktailCard } from "./components";
import "./App.css";
import Comp from "./components/Comp";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Comp />} />
        <Route path="/cocktail/:id" element={<CocktailCard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
