import { Routes, Route } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import Navbar from './components/Navbar';
import Section from './components/Section';
import CharacterDetailPage from './pages/CharacterDetailPage';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <MainContainer>
        <Section size='sm'>
          <Routes>
            <Route index path='/' element={<h1>Home Page</h1>} />
            <Route path='/characters/:id' element={<CharacterDetailPage />} />
            <Route path='*' element={<h1>Page Not Found</h1>} />
          </Routes>
        </Section>
      </MainContainer>
    </>
  );
}

export default App;
