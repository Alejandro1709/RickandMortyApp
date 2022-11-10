import { useState, useEffect } from 'react';
import MainContainer from './components/MainContainer';
import Navbar from './components/Navbar';
import Section from './components/Section';
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
        <Section size='sm'>
          <div className='navigation'>
            <a href='#'>Back</a>
            <p>Character Detail</p>
            <p>Additional Info</p>
          </div>
          <div className='App__content'>
            <div className='content__left'>LEFT</div>
            <div className='content__right'>RIGHT</div>
          </div>
        </Section>
      </MainContainer>
    </div>
  );
}

export default App;
