import Character from '../../types/character';
import styles from './CharacterDetail.module.css';

interface CharacterPageProps {
  data: Character;
}

function CharacterDetail({ data }: CharacterPageProps) {
  return (
    <div className={styles.content}>
      <div className={styles.contentLeft}>
        <div className={styles.leftImgHolder}>
          <img src={data?.image} alt={data?.name} draggable={false} />
        </div>
        <div className={styles.leftAddons}>
          <span className={styles.addonsItem}>Origin: {data?.origin.name}</span>
          <span className={styles.addonsItem}>
            Location: {data?.location.name}
          </span>
          <span className={styles.addonsItem}>
            # Episodes: {data?.episode.length}
          </span>
        </div>
      </div>
      <div className={styles.contentRight}>
        <ul role='list' className={styles.rightList}>
          <li className={styles.listItem}>Name: {data?.name}</li>
          <li className={styles.listItem}>Status: {data?.status}</li>
          <li className={styles.listItem}>Gender: {data?.gender}</li>
          <li className={styles.listItem}>Type: {data?.type}</li>
          <li className={styles.listItem}>Species: {data?.species}</li>
        </ul>
      </div>
    </div>
  );
}

export default CharacterDetail;
