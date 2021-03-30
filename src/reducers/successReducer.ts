import { CORRECT_GUESS, GuessActionType } from "../actions/types";

export default function successReducer(
    prevState: boolean = false,
    action: GuessActionType
): boolean {
    switch (action.type) {
        case CORRECT_GUESS:
            return true;

        default:
            return prevState;
    }
}