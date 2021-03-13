import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Congrats success={ true } />
        <GuessedWords guessedWords={ [
          { word: "train", letterMatchCount: 3 },
          { word: "train", letterMatchCount: 3 },
          { word: "party", letterMatchCount: 3 }

        ] } />
      </div>
    );
  }
}

export default App;
