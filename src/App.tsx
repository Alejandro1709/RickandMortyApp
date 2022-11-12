import { Routes, Route } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import Navbar from './components/Navbar';
import Section from './components/Section';
import useCharacters from './hooks/useCharacters';
import CharacterDetailPage from './pages/CharacterDetailPage';
import type Character from './types/character';
import './App.css';

const dummyCharacter: Character = {
  id: 361,
  name: 'Toxic Rick',
  status: 'Dead',
  species: 'Humanoid',
  type: "Rick's Toxic Side",
  gender: 'Male',
  origin: {
    name: 'Alien Spa',
    url: 'https://rickandmortyapi.com/api/location/64',
  },
  location: {
    name: 'Earth',
    url: 'https://rickandmortyapi.com/api/location/20',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/361.jpeg',
  episode: ['https://rickandmortyapi.com/api/episode/27'],
};

function App() {
  const { status, data, error } = useCharacters();

  if (status === 'loading') return <p>Loading...</p>;

  return (
    <div className='App'>
      <Navbar />
      <MainContainer>
        <Section size='sm'>
          <Routes>
            <Route
              path='/'
              element={
                <CharacterDetailPage
                  data={data || dummyCharacter}
                  error={error}
                />
              }
            />
          </Routes>
        </Section>
      </MainContainer>
    </div>
  );
}

export default App;
