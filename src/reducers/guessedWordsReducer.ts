import { GuessActionType, GUESS_WORD } from "../actions/types";
import { GuessedWord } from "../GuessedWords";

export default function guessedWordsReducer(state: GuessedWord[] = [], action: GuessActionType): GuessedWord[] {
    switch (action.type) {
        case GUESS_WORD:
            return [...state, action.payload];

        default:
            return state;
    }
}