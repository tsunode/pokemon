import "./styles.css";

export const Card = ({ id, name, image }) => {
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
