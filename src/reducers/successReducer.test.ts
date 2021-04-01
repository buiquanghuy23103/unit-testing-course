import { correctGuess } from "../actions";
import { GuessActionType } from "../actions/types";
import successReducer from "./successReducer";

test('should return false when previous state is undefined', () => {
    const newState = successReducer(undefined, {} as GuessActionType);
    expect(newState).toBe(false);
});

test('should return the previous state when action type is unknown', () => {
    const newState = successReducer(false, { type: 'UNKNOWN' });
    expect(newState).toBe(false);
});

test('should return true when action type is CORRECT_GUESS', () => {
    const action = correctGuess();
    const newState = successReducer(false, action);
    expect(newState).toBe(true);
});
