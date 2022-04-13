import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "./reset.css";
import "./App.css";

// function App() {
// }

export default function App() {

	const [pokemonData, setPokemonData] = useState([]);
    const value = 4

  useState(() => {
  	fetch("https://pokeapi.co/api/v2/pokemon/" + value)
    .then((response) => response.json())
    .then((data) => {
    	console.log("wat is pokedata", data);
      setPokemonData(data);
    })
    .catch((error) => {
    	console.log("Foutmelding:", error);
    });
  }, [value]);
  
  return (
  	<div className="app">
      <h1>Budget Pokédex</h1>
      <div className="pokedex">
        <div className="pokemonDisplay">
          { pokemonData && <img src={pokemonData?.sprites?.front_default} />}
        </div>
        <div className="pokemonData">
          <nav
            style={{
              borderBottom: "solid 1px",
              paddingBottom: "1rem",
            }}
          >
            <Link to="/pokemons">Pokémons</Link>
          </nav>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
