import CharacterCard from '../CharacterCard';
import type Character from '../../types/character';
import type StateProps from '../../types/state';

function CharactersList(state: StateProps) {
  return state.data?.results
    ? state.data?.results.map((result: Character) => (
        <CharacterCard key={result.id} {...result} />
      ))
    : null;
}

export default CharactersList;
