import Character from '../../types/character';

interface CharacterPageProps {
  data: Character;
}

function CharacterDetail({ data }: CharacterPageProps) {
  return (
    <div className='content'>
      <div className='content__left'>
        <div className='left__imgHolder'>
          <img src={data?.image} alt={data?.name} draggable={false} />
        </div>
        <div className='left__addons'>
          <span className='addons__item'>Origin: {data?.origin.name}</span>
          <span className='addons__item'>Location: {data?.location.name}</span>
          <span className='addons__item'>
            # Episodes: {data?.episode.length}
          </span>
        </div>
      </div>
      <div className='content__right'>
        <ul role='list' className='right__list'>
          <li className='list__item'>Name: {data?.name}</li>
          <li className='list__item'>Status: {data?.status}</li>
          <li className='list__item'>Gender: {data?.gender}</li>
          <li className='list__item'>Type: {data?.type}</li>
          <li className='list__item'>Species: {data?.species}</li>
        </ul>
      </div>
    </div>
  );
}

export default CharacterDetail;
