import { useEffect, useState } from 'react';
import { fetchCharacter } from '../services/fetchCharacters';
import type StateProps from '../types/state';

export default function useCharacters(id: string) {
  const [state, setState] = useState<StateProps>({
    status: 'idle',
    data: null,
    error: null,
  });

  useEffect(() => {
    setState({ ...state, status: 'loading' });
    fetchCharacter(id).then((data) => setState({ ...state, data }));
  }, []);

  return { ...state };
}
