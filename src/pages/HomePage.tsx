import React, { useState, useEffect } from 'react';
import CharactersList from '../components/CharactersList';
import Navigation from '../components/Navigation';
import { fetchCharacters } from '../services/fetchCharacters';
import type StateProps from '../types/state';

function HomePage() {
  const [state, setState] = useState<StateProps>({
    status: 'idle',
    data: null,
    error: null,
  });

  useEffect(() => {
    fetchCharacters()
      .then((data) => {
        console.log(data);
        setState({ ...state, data });
      })
      .catch((err) => setState({ ...state, data: null, error: err.message }));
  }, []);

  return (
    <React.Fragment>
      <p>Filterbar</p>
      {state.error ? <p>{state.error.message}</p> : null}
      <div className='content'>
        <CharactersList {...state} />
      </div>
    </React.Fragment>
  );
}

export default HomePage;
