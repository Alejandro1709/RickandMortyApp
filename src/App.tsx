import { useState, useEffect } from 'react';
import MainContainer from './components/MainContainer';
import Navbar from './components/Navbar';
import type Character from './types/character';
import './App.css';

interface StateProps {
  status: 'idle' | 'loading' | 'error';
  data: Character | null;
  error: Error | null;
}

function App() {
  const [state, setState] = useState<StateProps>({
    status: 'idle',
    data: null,
    error: null,
  });

  useEffect(() => {
    setState({ ...state, status: 'loading' });
    fetch('https://rickandmortyapi.com/api/character/2')
      .then((res) => res.json())
      .then((data) => setState({ ...state, status: 'idle', data }))
      .catch((err) => setState({ ...state, data: null, error: err }));
  }, []);

  return (
    <div className='App'>
      <Navbar />
      <MainContainer>
        <section className='section'>Hola</section>
      </MainContainer>
    </div>
  );
}

export default App;
