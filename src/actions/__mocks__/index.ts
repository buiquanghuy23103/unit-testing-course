const actionModule = {
    // Keep everything in the module the same as it be
    ...jest.requireActual('..'),
    // We want to use 'es' import statement
    __esModule: true,
    getSecretWord: jest.fn().mockReturnValue(Promise.resolve('party')),
};

export default actionModule;