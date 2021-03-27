import { mount, ReactWrapper } from "enzyme"
import { findByTestAttr } from "../test/testUtils";
import App from "./App";
import { AppState } from "./AppState";



const setup = (state: AppState) => {
    const wrapper = mount(<App />);

    const inputBox = findByTestAttr(wrapper, "input-box");
    inputBox.simulate('change', { target: { value: 'train' } });

    const submitButton = findByTestAttr(wrapper, 'submit-button');
    submitButton.simulate('click', { preventDefault() { } });

    return wrapper;
};

describe('no words guessed', () => {
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

describe('some words guessed', () => {
    let wrapper: ReactWrapper;

    beforeEach(() => {
        const initialState: AppState = {
            secretWord: 'party',
            success: false,
            guessedWords: [
                { word: 'train', letterMatchCount: 3 }
            ]
        };

        wrapper = setup(initialState);
    });

    test('should have two rows in GuessedWords tablet', () => {
        const guessedWordRows = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordRows).toHaveLength(2);
    });

});

describe('correct guess', () => {
    let wrapper: ReactWrapper;

    beforeEach(() => {
        const initialState: AppState = {
            secretWord: 'party',
            success: false,
            guessedWords: [
                { word: 'train', letterMatchCount: 3 }
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
        expect(guessedWordRows).toHaveLength(2);
    });


    test('should display congrats message', () => {
        const congratMessage = findByTestAttr(wrapper, 'congrats-message');
        expect(congratMessage).toHaveLength(1);
    });

    test('should hide input box', () => {
        const inputBox = findByTestAttr(wrapper, 'input-box');
        expect(inputBox).toHaveLength(0);
    });

    test('should hide submit button', () => {
        const button = findByTestAttr(wrapper, 'submit-button');
        expect(button).toHaveLength(0);
    })

})
