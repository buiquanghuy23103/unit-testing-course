import React, { Component } from 'react';
import './App.css';
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';

class App extends Component {
  render() {
    return (
      <div className="container" data-test="component-app">
        <h1>Jotto</h1>
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
