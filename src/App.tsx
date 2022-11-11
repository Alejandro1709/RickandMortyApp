import MainContainer from './components/MainContainer';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Navigation from './components/Navigation';
import useCharacters from './hooks/useCharacters';
import CharacterDetailPage from './pages/CharacterDetailPage';
import './App.css';

function App() {
  const { status, data, error } = useCharacters();

  if (status === 'loading') return <p>Loading...</p>;

  return (
    <div className='App'>
      <Navbar />
      <MainContainer>
        <Section size='sm'>
          <Navigation backUrl='/' title='Character Details' />
          {error ? <p>{error.message}</p> : null}
          {data ? <CharacterDetailPage data={data} /> : <p>No Data</p>}
        </Section>
      </MainContainer>
    </div>
  );
}

export default App;
