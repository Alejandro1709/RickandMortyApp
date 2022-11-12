import { useEffect, useState } from 'react';
import { fetchCharacter } from '../services/fetchCharacters';
import Character from '../types/character';

interface StateProps {
  status: 'idle' | 'loading' | 'error';
  data: Character | null;
  error: Error | null;
}

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
