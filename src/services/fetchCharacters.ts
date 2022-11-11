export function fetchCharacter(id: string) {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`).then((res) =>
    res.json()
  );
}
