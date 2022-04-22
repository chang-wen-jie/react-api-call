import { Link, Outlet } from "react-router-dom";
import React from "react";

export default function Pokemons() {
  return (
    <main>
      <div className="pokedex">
        <Link to={`../`}>
          <p>Terug</p>
        </Link>
        <div className="pokemonList">
          <Link to={`/pokemons/4`}>
            <img
              src={require("../img/charmander.png")}
              className="charmander"
            ></img>
            <br></br>
          </Link>
          <Link to={`/pokemons/5`}>
            <img
              src={require("../img/charmeleon.png")}
              className="charmeleon"
            ></img>
            <br></br>
          </Link>
          <Link to={`/pokemons/6`}>
            <img
              src={require("../img/charizard.png")}
              className="charizard"
            ></img>
            <br></br>
          </Link>
          <Outlet />
        </div>
      </div>
    </main>
  );
}
