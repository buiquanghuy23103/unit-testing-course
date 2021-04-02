import { Store } from "redux";
import { storeFactory } from "../test/testUtils";
import { guessWord } from "./actions";
import { AppState, AppStore } from "./configureStore";

describe('guessWord action dispatcher', () => {
    const secretWord = 'party';
    const incorrectGuess = 'train';

    describe('no guessed words were submitted', () => {
        let store: AppStore;
        const initialState: AppState = {
            success: false,
            guessedWords: []
        };

        beforeEach(() => {
            store = storeFactory(initialState);
        });

        test('should udpate state correctly for incorrect guess', () => {
            store.dispatch(guessWord(incorrectGuess));
            const expectedState: AppState = {
                ...initialState,
                success: false,
                guessedWords: [{
                    word: incorrectGuess,
                    letterMatchCount: 3
                }]
            };
            const newState = store.getState();
            expect(newState).toEqual(expectedState)
        });
        test('should udpate state correctly for correct guess', () => {

        });

    });
    describe('some guessed words were submitted', () => {
        test('should udpate state correctly for incorrect guess', () => {

        });
        test('should udpate state correctly for correct guess', () => {

        });

    });

});
