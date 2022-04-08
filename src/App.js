import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.css";

// function App() {
// 	const [pokemonData, setPokemonData] = useState([]);
//   // const [value = 2, setValue] = useState([])
//   const value = 432

//   useState(() => {
//   	fetch("https://pokeapi.co/api/v2/pokemon/" + value)
//     .then((response) => response.json())
//     .then((data) => {
//     	console.log("wat is pokedata", data);
//       setPokemonData(data);
//     })
//     .catch((error) => {
//     	console.log("Foutmelding:", error);
//     });
//   }, [value]);
  
//   const handleChange = (value) => {
//     // setValue(value ? value : 25);
//     console.log("wat is mijn value", value);
//   }
  
//   return (
//   	<div className="app">
//       <div className="pokemonSearch">
//         <input
//           type="number"
//           value={value}
//           onChange={(e) => handleChange(e.target.value)}
//         />
//       </div>
//       <div className="pokemonDisplay">
//         { pokemonData && <img style={{height: 100}} src={pokemonData?.sprites?.front_default} />}
//       </div>
//     </div>
//   )
// }

export default function App() {
  return (
    <div>
      <h1>Bookkeeper!</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}
