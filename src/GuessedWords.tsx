import React from 'react';

export type GuessedWord = {
    word: string,
    letterMatchCount: number
}

export type GuessedWordsProps = {
    guessedWords: Array<GuessedWord>
}

export default function GuessedWords(props: GuessedWordsProps) {
    return (
        <div data-test="component-guessed-words">
            <h4 data-test="instruction">Try to guess the secret word</h4>
        </div>
    )
}
