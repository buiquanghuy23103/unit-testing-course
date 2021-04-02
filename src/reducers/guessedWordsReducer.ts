import { GuessActionType } from "../actions/types";
import { GuessedWord } from "../GuessedWords";

export default function guessedWordsReducer(state: GuessedWord[] = [], action: GuessActionType): GuessedWord[] {
    return state;
}