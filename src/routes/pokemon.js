import { useParams } from "react-router-dom";
import { getPokemon } from "../pokemonData";

export default function Pokemon() {
    let params = useParams();
    let pokemon = getPokemon(parseInt(params.pokemonId));
    return (
        <main>
          <h2>{pokemon.id}</h2>
          <h3>{pokemon.name}</h3>
          <h4>{pokemon.height}</h4>
          <h5>{pokemon.weight}</h5>
        </main>
      );
}