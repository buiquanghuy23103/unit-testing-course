import axios from "axios";
import { AppThunk } from "../configureStore";
import { getLetterMatchCount } from "../helpers";
import { CORRECT_GUESS, GuessActionType, GUESS_WORD, SET_SECRET_WORD } from "./types";

export const guessWord = (word: string): AppThunk => async (dispatch, getState) => {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(word, secretWord);

    dispatch({
        type: GUESS_WORD,
        payload: { word, letterMatchCount }
    });

    if (word === secretWord) {
        dispatch(correctGuess());
    }
}

export function correctGuess(): GuessActionType {
    return {
        type: CORRECT_GUESS
    };
}

export const getSecretWord = (): AppThunk => async (dispatch) => {
    return axios.get('http://localhost:3030')
        .then((response) => dispatch({
            type: SET_SECRET_WORD,
            payload: response.data
        }));
}