import React from 'react';
import CharacterDetail from '../components/CharacterDetail';
import Navigation from '../components/Navigation';
import Character from '../types/character';

interface CharacterPageProps {
  error?: Error | null;
  data: Character;
}

function CharacterDetailPage({ data, error }: CharacterPageProps) {
  return (
    <React.Fragment>
      <Navigation backUrl='/' title='Character Details' />
      {error ? <p>{error.message}</p> : null}
      {data ? <CharacterDetail data={data} /> : <p>No Data</p>}
    </React.Fragment>
  );
}

export default CharacterDetailPage;
