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
        <div>

        </div>
    )
}
