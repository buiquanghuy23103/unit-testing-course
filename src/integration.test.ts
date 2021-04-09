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
            guessedWords: [],
            secretWord: 'party'
        };

        beforeEach(() => {
            store = storeFactory(initialState);
        });

        test('should udpate state correctly for incorrect guess', () => {
            // The normal Dispatch type just does not support thunks per default. 
            // The solution is using Dispatch<any>
            // https://stackoverflow.com/questions/60049490/argument-of-type-thunkaction-is-not-assignable-to-parameter-of-type-anyaction 
            store.dispatch<any>(guessWord(incorrectGuess));
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
            store.dispatch<any>(guessWord(secretWord));
            const expectedState: AppState = {
                ...initialState,
                success: true,
                guessedWords: [{
                    word: secretWord,
                    letterMatchCount: 5
                }]
            };
            const newState = store.getState();
            expect(newState).toEqual(expectedState)
        });

    });
    describe('some guessed words were submitted', () => {
        let store: AppStore;
        const initialState: AppState = {
            success: false,
            guessedWords: [{
                word: 'agile',
                letterMatchCount: 1
            }],
            secretWord: 'party'
        };

        beforeEach(() => {
            store = storeFactory(initialState);
        });
        test('should udpate state correctly for incorrect guess', () => {
            store.dispatch<any>(guessWord(incorrectGuess));
            const expectedState: AppState = {
                ...initialState,
                guessedWords: [
                    {
                        word: 'agile',
                        letterMatchCount: 1
                    },
                    {
                        word: incorrectGuess,
                        letterMatchCount: 3
                    }
                ]
            };
            const newState = store.getState();
            expect(newState).toEqual(expectedState);
        });
        test('should udpate state correctly for correct guess', () => {
            store.dispatch<any>(guessWord(secretWord));
            const expectedState: AppState = {
                ...initialState,
                success: true,
                guessedWords: [
                    {
                        word: 'agile',
                        letterMatchCount: 1
                    },
                    {
                        word: secretWord,
                        letterMatchCount: 5
                    }
                ]
            };
            const newState = store.getState();
            expect(newState).toEqual(expectedState);
        });

    });

});
