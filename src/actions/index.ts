import axios from "axios";
import { AppState } from "../configureStore";
import { CORRECT_GUESS, GuessActionType } from "./types";

export const actionTypes = {
    CORRECT_GUESS: 'CORRECT_GUESS',
    GUESS_WORD: 'GUESS_WORD'
};

export function guessWord(word: string) {
    return function (dispatch: any, getState: AppState) {

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