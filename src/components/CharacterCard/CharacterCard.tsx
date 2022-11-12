import { Link } from 'react-router-dom';
import type Character from '../../types/character';
import styles from './CharacterCard.module.css';

function CharacterCard(result: Character) {
  return (
    <Link to={`/characters/${result.id}`}>
      <article className={styles.card}>
        <img src={result.image} alt={result.name} draggable={false} />
      </article>
    </Link>
  );
}

export default CharacterCard;
