import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSecretWord } from './actions';
import './App.css';
import { AppState } from './configureStore';
import Congrats from './Congrats';
import GuessedWords, { GuessedWord } from './GuessedWords';
import Input from './input';

function App() {
  const success = useSelector((state: AppState) => state.success);
  const guessedWords: GuessedWord[] = useSelector((state: AppState) => state.guessedWords);
  const secretWord = useSelector((state: AppState) => state.secretWord);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSecretWord());
  }, []);

  return (
    <div className="container" data-test="component-app">
      <h1>Jotto</h1>
      <p>The secret word is { secretWord }</p>
      <Input success={ success } />
      <Congrats success={ success } />
      <GuessedWords guessedWords={ guessedWords } />
    </div>
  );
}

export default App;
