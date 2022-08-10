import React, { useState } from "react";

import Search from "../components/Search";
import logo from "../images/pokemon3.png";
import fetchPokemon from "../services/getPokemon";
import CardPokemon from "../components/CardPokemon";
import Loading from "../components/Loading";
import Alert from "../components/Alert";

export default function Home() {
  const [pokemon, setPokemon] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getPokemon = async (query) => {
    if (!query) {
      setError(true);
      return;
    }
    setError(false);
    setLoading(true);
    setTimeout(async () => {
      try {
        const response = await fetchPokemon(query);
        const results = await response.json();
        console.log(results);
        setPokemon(results);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(true);
      }
    }, 1500);
  };
  return (
    <div>
      {error ? <Alert /> : null}
      <div className="flex justify-center mb-2">
        <img src={logo} alt="pokemon-logo" />
      </div>
      <Search getPokemon={getPokemon} />
      {loading ? <Loading /> : null}
      {!loading && pokemon ? (
        <CardPokemon
          name={pokemon.name}
          sprite={pokemon.sprites.front_default}
          abilities={pokemon.abilities}
          stats={pokemon.stats}
          types={pokemon.types}
        />
      ) : null}
    </div>
  );
}
