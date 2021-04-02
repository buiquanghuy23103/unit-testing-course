import { mount, ReactWrapper } from "enzyme"
import { Provider } from "react-redux";
import { findByTestAttr, storeFactory } from "../test/testUtils";
import App from "./App";
import { AppState } from "./configureStore";

// Make sure getSecretWord doesn't make network call
jest.mock('./actions');


const setup = (initialState: AppState) => {
    const store = storeFactory(initialState);
    const wrapper = mount(<Provider store={ store }><App /></Provider>);

    const inputBox = findByTestAttr(wrapper, "input-box");
    inputBox.simulate('change', { target: { value: 'train' } });

    const submitButton = findByTestAttr(wrapper, 'submit-button');
    submitButton.simulate('click', { preventDefault() { } });

    return wrapper;
};

describe('no guessed words in the initial state', () => {
    let wrapper: ReactWrapper;

    beforeEach(() => {
        const initialState: AppState = {
            secretWord: 'party',
            success: false,
            guessedWords: []
        };
        wrapper = setup(initialState)
    });

    test('should create GuessedWords table with one row', () => {
        const guessedWordRows = findByTestAttr(wrapper, 'guessed-word');
        // Expect one row because setup() already submitted one word
        expect(guessedWordRows).toHaveLength(1);
    });

});

describe('some guessed words in the initial state', () => {
    let wrapper: ReactWrapper;

    beforeEach(() => {
        const initialState: AppState = {
            secretWord: 'party',
            success: false,
            guessedWords: [
                { word: 'agile', letterMatchCount: 1 }
            ]
        };

        wrapper = setup(initialState);
    });

    test('should have two rows in GuessedWords tablet', () => {
        const guessedWordRows = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordRows).toHaveLength(2);
    });

});

describe('submit a correct guess', () => {
    let wrapper: ReactWrapper;

    beforeEach(() => {
        const initialState: AppState = {
            secretWord: 'party',
            success: false,
            guessedWords: [
                { word: 'agile', letterMatchCount: 1 }
            ]
        };
        wrapper = setup(initialState);


        const inputBox = findByTestAttr(wrapper, "input-box");
        inputBox.simulate('change', { target: { value: 'party' } });

        const submitButton = findByTestAttr(wrapper, 'submit-button');
        submitButton.simulate('click', { preventDefault() { } });
    });

    test('should add a row to GuessWords table', () => {
        const guessedWordRows = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordRows).toHaveLength(3);
    });


    test('should display congrats message', () => {
        const congratMessage = findByTestAttr(wrapper, 'congrats-message').text();
        expect(congratMessage.length).toBeGreaterThan(0);
    });

    test('should hide input box', () => {
        const inputBox = findByTestAttr(wrapper, 'input-box');
        expect(inputBox).toHaveLength(0);
    });

    test('should hide submit button', () => {
        const button = findByTestAttr(wrapper, 'submit-button');
        expect(button).toHaveLength(0);
    });

})
