export const CORRECT_GUESS = 'CORRECT_GUESS';
export const NONE = 'NONE';

interface CorrectGuessAction {
    type: typeof CORRECT_GUESS
}

export type GuessActionType = CorrectGuessAction | None;