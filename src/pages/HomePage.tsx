import React from 'react';
import { fetchCharacters } from '../services/fetchCharacters';
import CharactersList from '../components/CharactersList';
import useAsync from '../hooks/useAsync';

function HomePage() {
  const { status, data, error } = useAsync(fetchCharacters);
  return (
    <React.Fragment>
      <div className=''>
        <input type='text' placeholder='Search Character' />
      </div>
      {error ? <p>{error.message}</p> : null}
      <div className='content'>
        <CharactersList data={data} error={error} status={status} />
      </div>
    </React.Fragment>
  );
}

export default HomePage;
