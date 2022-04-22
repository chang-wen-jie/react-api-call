import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Pokemons from "./routes/pokemons";
import Pokemon from "./routes/pokemon";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="pokemons" element={<Pokemons />}>
          <Route path=":pokemonId" element={<Pokemon />} />
        </Route>
        <Route
          path="*"
          element={
            <main>
              <p>Er is niks hier!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
