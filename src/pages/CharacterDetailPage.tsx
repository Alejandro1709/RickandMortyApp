import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCharacter } from '../services/fetchCharacters';
import CharacterDetail from '../components/CharacterDetail';
import Navigation from '../components/Navigation';
import useAsync from '../hooks/useAsync';
import type Character from '../types/character';

function CharacterDetailPage() {
  const { id } = useParams();

  const asynFunc = useCallback(() => {
    if (!id) return <h1>Character Not Found.</h1>;

    return fetchCharacter(id);
  }, [id]);

  // @ts-ignore
  const { data, error } = useAsync(asynFunc);

  return (
    <React.Fragment>
      <Navigation backUrl='/' title='Character Details' />
      {error ? <p>{error.message}</p> : null}
      {data ? <CharacterDetail data={data as Character} /> : <p>No Data</p>}
    </React.Fragment>
  );
}

export default CharacterDetailPage;
