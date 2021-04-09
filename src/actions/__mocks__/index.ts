import { SET_SECRET_WORD } from "../types";

module.exports = {
    // Keep everything in the module the same as it be
    ...jest.requireActual('../'),
    // We want to use 'es' import statement
    __esModule: true,
    getSecretWord: jest.fn().mockReturnValue({
        type: typeof SET_SECRET_WORD,
        payload: 'party'
    }),
};