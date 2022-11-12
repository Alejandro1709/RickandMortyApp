export function fetchCharacter(id: string) {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`).then((res) =>
    res.json()
  );
}

export function fetchCharacters() {
  return fetch('https://rickandmortyapi.com/api/character').then((res) =>
    res.json()
  );
}
