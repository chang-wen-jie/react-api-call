import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";


export default function Pokemon() {
  const [pokemonData, setPokemonData] = useState([]);

  useState(() => {
  	fetch("https://pokeapi.co/api/v2/pokemon/4")
    .then((response) => response.json())
    .then((data) => {
    	console.log("wat is pokedata", data);
      setPokemonData(data);
    })
    .catch((error) => {
    	console.log("Foutmelding:", error);
    });
  });

  return (
      <main>
      <div className="pokedex">
        <div className="pokemonDisplay">
          { pokemonData && <img src={pokemonData?.sprites?.front_default} />}
          <Link
            to={`../../`}
          >
            <p>Terug</p>
          </Link>
        <div>
        <div className="pokemonTypeBubble">
          <img src={require("../img/pokemon_type.png")}></img>
        </div>
        <Outlet />
    </div>
        </div>
      </div>
        <h2>{pokemonData?.id}</h2>
        <h3>{pokemonData?.name}</h3>
        <h4>{pokemonData?.height + "'"}</h4>
        <h5>{pokemonData?.weight + " lbs."}</h5>
        <h6>From the time it is born, a flame burns at the tip of its tail. Its life would end if the flame were to go out.</h6>
      </main>
    );
}