import React, { useState, useContext } from 'react';
import { CharacterContext } from '../context/characterContext';
import CharactersList from '../components/CharactersList';
import type Character from '../types/character';
import { type Result } from '../types/state';

function HomePage() {
  const [inputText, setInputText] = useState<string>('');
  const [filteredData, setFilteredData] = useState<Character[]>([]);

  const { status, data, error } = useContext(CharacterContext);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);

    const filtered: Character[] = (data as Result).results.filter(
      (character: Character) => character.name === inputText
    );

    setFilteredData(filtered);
  };

  return (
    <React.Fragment>
      <div className=''>
        <input
          type='text'
          placeholder='Search Character'
          value={inputText}
          onChange={handleInputChange}
        />
      </div>
      {error ? <p>{error.message}</p> : null}
      <div className='content'>
        <CharactersList data={data} error={error} status={status} />
      </div>
    </React.Fragment>
  );
}

export default HomePage;
