import { GuessedWord } from "../GuessedWords";

export const CORRECT_GUESS = 'CORRECT_GUESS';
export const GUESS_WORD = 'GUESS_WORD';
export const SET_SECRET_WORD = 'SET_SECRET_WORD';
export const NONE = 'NONE';

interface CorrectGuessAction {
    type: typeof CORRECT_GUESS
}

interface GuessWordAction {
    type: typeof GUESS_WORD
    payload: GuessedWord
}

interface SetSecretWordAction {
    type: typeof SET_SECRET_WORD,
    payload: string
}

export type GuessActionType =
    CorrectGuessAction
    | GuessWordAction
    | SetSecretWordAction;