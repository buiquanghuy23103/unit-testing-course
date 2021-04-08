import { GuessActionType, SET_SECRET_WORD } from "../actions/types";

export default function secretWordReducer(state: string = '', action: GuessActionType) {
    switch (action.type) {
        case SET_SECRET_WORD:
            return action.payload;

        default:
            return state;
    }
}