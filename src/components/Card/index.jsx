import './styles.css';

export const Card = () => {
  return (
    <li className='card'>
      <div>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="Ditto" />
      </div>
      <div>
        <span>132</span>
        <span>Ditto</span>
      </div>
    </li>
  );
};
