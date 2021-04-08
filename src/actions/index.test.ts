import moxios from "moxios";
import { getSecretWord } from ".";
import { storeFactory } from "../../test/testUtils";

describe('getSecretWord', () => {
    beforeEach(() => {
        moxios.install();
    });
    afterEach(() => {
        moxios.uninstall();
    });
    test('should return the secret word', () => {
        const store = storeFactory({
            success: false,
            secretWord: '',
            guessedWords: []
        })
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: 'party'
            });
        });

        // Reason for using 'return':
        // The test will not end until the promise is resolved.
        // Reason for using 'then':
        // Make sure getSecretWord() promise is completed before assertion
        return store.dispatch(getSecretWord())
            .then(() => {
                const secretWord = store.getState().secretWord;
                expect(secretWord).toBe('party');
            })

    });
});
