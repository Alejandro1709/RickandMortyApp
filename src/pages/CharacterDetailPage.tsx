import React from 'react';
import { useParams } from 'react-router-dom';
import CharacterDetail from '../components/CharacterDetail';
import Navigation from '../components/Navigation';
import useCharacters from '../hooks/useCharacters';

function CharacterDetailPage() {
  const { id } = useParams();

  if (!id) return <h1>Character Not Found.</h1>;

  const { status, data, error } = useCharacters(id);

  if (status === 'loading') return <p>Loading...</p>;

  return (
    <React.Fragment>
      <Navigation backUrl='/' title='Character Details' />
      {error ? <p>{error.message}</p> : null}
      {data ? <CharacterDetail data={data} /> : <p>No Data</p>}
    </React.Fragment>
  );
}

export default CharacterDetailPage;
