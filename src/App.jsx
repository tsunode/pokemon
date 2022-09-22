import "./App.css";
import { Card } from "./components/Card";

export const App = () => {
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
