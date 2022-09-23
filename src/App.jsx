import { useEffect } from "react";

import { Card } from "./components/Card";

import api from "./services/api";
import "./App.css";

export const App = () => {
  useEffect(() => {
    api.get('/pokemon', {
      params: {
        limit: 151,
        offset: 0
      }
    }).then(response => {
      console.log(response);
    })
  }, []);

  const pokemons = [
    {
      id: 132,
      name: "Ditto",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    },
    {
      id: 132,
      name: "Ditto",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    },
    {
      id: 132,
      name: "Ditto",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    },
    {
      id: 132,
      name: "Ditto",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    },
  ];

  return (
    <div className="App">
      <ul>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} {...pokemon} />
        ))}
      </ul>
    </div>
  );
};
