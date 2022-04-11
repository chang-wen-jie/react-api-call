let pokemons = [
{
    name: "pikachu",
    id: 195,
    height: 0.3 + " m",
    weight: 12 + " kg",
},
{
    name: "bulbusaur",
    id: 200,
    height: 1.2 + " m",
    weight: 1.0 + " kg",
},
{
    name: "ash",
    id: 23,
    height: 1.3 + " m",
    weight: 23 + " kg",
},
];
  
export function getPokemons() {
    return pokemons;
}

export function getPokemon(id) {
    return pokemons.find(
        (pokemon) => pokemon.id === id
    );
}