import React from 'react';

export type GuessedWord = {
    word: string,
    letterMatchCount: number
}

export type GuessedWordsProps = {
    guessedWords: Array<GuessedWord>
}

export default function GuessedWords(props: GuessedWordsProps) {
    let content: JSX.Element;

    const random = () => {
        return Math.random().toString(16).substr(2, 8);
    }

    const guessWordsRows = props.guessedWords.map(guessedWord => {
        return (
            <tr key={ random() } data-test="guessed-word">
                <td>{ guessedWord.word }</td>
                <td>{ guessedWord.letterMatchCount }</td>
            </tr>
        );
    });

    if (props.guessedWords.length === 0) {
        content = (<h4 data-test="instruction">Try to guess the secret word</h4>);
    } else {
        content = (
            <div data-test="guessed-words-section">
                <h3>Guessed words</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Guess</th>
                            <th>Matching letters</th>
                        </tr>
                    </thead>
                    <tbody>
                        { guessWordsRows }
                    </tbody>
                </table>
            </div>
        );
    }
    return (
        <div data-test="component-guessed-words">
            {content }
        </div>
    )
}
