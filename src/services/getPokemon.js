const baseUrl = "https://pokeapi.co/api/v2";
const query = {
  pokemon: "pokemon",
};

export default function fetchPokemon(pokemon) {
  console.log(`${baseUrl}/${query.pokemon}/${pokemon}`);
  return fetch(`${baseUrl}/${query.pokemon}/${pokemon}`);
}
