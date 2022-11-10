import { useState, useEffect } from 'react';
import MainContainer from './components/MainContainer';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Navigation from './components/Navigation';
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
    fetch('https://rickandmortyapi.com/api/character/4')
      .then((res) => res.json())
      .then((data) => setState({ ...state, status: 'idle', data }))
      .catch((err) => setState({ ...state, data: null, error: err }));
  }, []);

  return (
    <div className='App'>
      <Navbar />
      <MainContainer>
        <Section size='sm'>
          <Navigation backUrl='/' title='Character Details' />
          <div className='content'>
            <div className='content__left'>
              <div className='left__imgHolder'>
                <img
                  src={state.data?.image}
                  alt={state.data?.name}
                  draggable={false}
                />
              </div>
              <div className='left__addons'>
                <span className='addons__item'>
                  Origin: {state.data?.origin.name}
                </span>
                <span className='addons__item'>
                  Location: {state.data?.location.name}
                </span>
                <span className='addons__item'>
                  # Episodes: {state.data?.episode.length}
                </span>
              </div>
            </div>
            <div className='content__right'>
              <ul role='list' className='right__list'>
                <li className='list__item'>Name: {state.data?.name}</li>
                <li className='list__item'>Status: {state.data?.status}</li>
                <li className='list__item'>Gender: {state.data?.gender}</li>
                <li className='list__item'>Type: {state.data?.type}</li>
                <li className='list__item'>Species: {state.data?.species}</li>
              </ul>
            </div>
          </div>
        </Section>
      </MainContainer>
    </div>
  );
}

export default App;
