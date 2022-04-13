let pokemons = [
{
    name: "pikachu",
    id: 195,
    height: 0.3 + " ft.",
    weight: 12 + " lbs.",
},
{
    name: "bulbusaur",
    id: 200,
    height: 1.2 + " ft.",
    weight: 1.0 + " lbs.",
},
{
    name: "ash ketchup",
    id: 23,
    height: 1.3 + " ft.",
    weight: 23 + " lbs.",
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