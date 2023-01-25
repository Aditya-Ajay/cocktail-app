import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CocktailCard } from "./components";
import "./App.css";

import Comp from "./components/Comp";
import SearchComponent from "./components/SearchComponent";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Comp />} />
        <Route path="/cocktail/:id" element={<CocktailCard />} />
        <Route path="/search/:search" element={<SearchComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
