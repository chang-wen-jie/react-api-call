import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./reset.css";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <div className="pokedex">
        <div className="openPokedex">
          <Link to={`/pokemons/`}>
            <img src={require(".//img/pokeball.png")}></img>
            <br></br>
            <h1>Open Pokédex</h1>
          </Link>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
