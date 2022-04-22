import { Link, Outlet } from "react-router-dom";
import React from "react";

export default function Pokemons() {
  return (
    <main>
      <div className="pokemonDisplay">

      <div ckassName="pokedex">
        <Link to={`/pokemons/4`}><br></br>Charmander</Link>
        <Link to={`/pokemons/5`}><br></br>Charmeleon</Link>
        <Link to={`/pokemons/6`}><br></br>Charizard</Link>
        <Outlet />
      </div>
      </div>
    </main>
  );
}

function Child() {
  let { id } = 4;
}