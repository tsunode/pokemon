import "./styles.css";

export const Card = ({ id, name }) => {
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <li className="card">
      <div>
        <img src={image} alt={name} />
      </div>
      <div>
        <span>{id}</span>
        <span>{name}</span>
      </div>
    </li>
  );
};
