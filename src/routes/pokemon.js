import { useParams } from "react-router-dom";
import { getPokemon } from "../pokemonData";

export default function Pokemon() {
    let params = useParams();
    let pokemon = getPokemon(parseInt(params.pokemonId));
    return (
        <main style={{ padding: "1rem" }}>
          <h2>{pokemon.id}</h2>
          <p>
            Name: {pokemon.name}
          </p>
          <p>
            Height: {pokemon.height}
          </p>
          <p>
            Weight: {pokemon.weight}
          </p>
        </main>
      );
}