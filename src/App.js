import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [pokemonData, setPokemonData] = useState([]);
  const [value, setValue] = useState([])
  

  useState(() => {
  	fetch("https://pokemonapi.net/api/v2/pokemon/")
    .then((response) => response.json())
    .then((data) => {
    	console.log(data);
      setPokemonData(data.results);
    })
    .catch((error) => {
    	console.log(error);
    });
  }, [value]);
  
  const handleChange = (value) => {
    setValue(value ? value : 25);
  }
  
  return (
  	<div className="app">
    	<input
      	type="number"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
      { pokemonData && <img src={pokemonData?.sprites?.front_default} />}
    </div>
  )
}

export default App;
