import axios from "axios";
import { AppState } from "../configureStore";
import { CORRECT_GUESS, GuessActionType, GUESS_WORD } from "./types";

export function guessWord(word: string) {
    return function (dispatch: any, getState: AppState): GuessActionType {
        return {
            type: GUESS_WORD,
            payload: {
                word: '',
                letterMatchCount: 0
            }
        }
    };
}

export function correctGuess(): GuessActionType {
    return {
        type: CORRECT_GUESS
    };
}

export const getSecretWord = () => {
    // TODO: write actual action 
    return axios.get('http://localhost:3030')
        .then((response) => response.data);
}