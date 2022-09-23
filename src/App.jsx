import { useEffect, useState } from "react";

import { Card } from "./components/Card";

import api from "./services/api";
import "./App.css";

export const App = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    api
      .get("/pokemon", {
        params: {
          limit: 151,
          offset: 0,
        },
      })
      .then((response) => {
        setPokemons(response.data.results);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <ul>
        {pokemons.map((pokemon, index) => (
          <Card key={index} id={index + 1} name={pokemon.name} />
        ))}
      </ul>
    </div>
  );
};
