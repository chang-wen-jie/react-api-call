import { Link, Outlet } from "react-router-dom";
import { getPokemons } from "../pokemonData";

export default function Pokemons() {
  let pokemons = getPokemons();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {pokemons.map((pokemon) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/pokemons/${pokemon.id}`}
            key={pokemon.id}
          >
            {pokemon.name}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}