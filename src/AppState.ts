import { GuessedWord } from "./GuessedWords";

export type AppState = {

    secretWord: string,
    success: boolean,
    guessedWords: GuessedWord[]

}