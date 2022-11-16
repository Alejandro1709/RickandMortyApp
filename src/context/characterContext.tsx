import { createContext } from 'react';
import { fetchCharacters } from '../services/fetchCharacters';
import useAsync from '../hooks/useAsync';
import StateProps from '../types/state';

interface CharacterContextProps {
  children: React.ReactNode;
}

export const CharacterContext = createContext<StateProps>({
  status: 'idle',
  data: null,
  error: null,
});

function CharacterProvider({ children }: CharacterContextProps) {
  const { status, data, error } = useAsync(fetchCharacters);

  return (
    <CharacterContext.Provider value={{ status, data, error }}>
      {children}
    </CharacterContext.Provider>
  );
}

export { CharacterProvider };
