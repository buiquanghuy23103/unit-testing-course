import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getSecretWord } from './actions';
import './App.css';
import { AppState } from './configureStore';
import Congrats from './Congrats';
import GuessedWords, { GuessedWord } from './GuessedWords';
import Input from './input';

function App() {
  const success = useSelector((state: AppState) => state.success);
  const guessedWords: GuessedWord[] = useSelector((state: AppState) => state.guessedWords);

  useEffect(() => {
    getSecretWord();
  }, []);

  return (
    <div className="container" data-test="component-app">
      <h1>Jotto</h1>
      <Input success={ success } />
      <Congrats success={ success } />
      <GuessedWords guessedWords={ guessedWords } />
    </div>
  );
}

export default App;
