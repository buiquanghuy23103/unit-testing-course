import { mount, shallow, ShallowWrapper } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import { findByTestAttr, storeFactory } from "../test/testUtils";
import Input from "./input";

const setup = (success: boolean = false) => {
    const store = storeFactory({
        success: success,
        secretWord: '',
        guessedWords: []
    });
    return mount(<Provider store={ store }><Input success={ success } /></Provider>)
};

const mockSetCurrentGuess = jest.fn();

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: (initialState: any) => [initialState, mockSetCurrentGuess]
}));

test('should render without errors', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-input");
    expect(component).toHaveLength(1);
});

describe('state controlled input field', () => {
    test('should update state upon input changes', () => {
        const wrapper = setup();
        const inputBox = findByTestAttr(wrapper, "input-box");

        const mockEvent = { target: { value: "train" } };
        inputBox.simulate("change", mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
    });
    test('should clear input upon submit button click', () => {
        const wrapper = setup();

        const submitButton = findByTestAttr(wrapper, "submit-button");
        // Clicking submit button will call event.preventDefault(),
        // so the dummy preventDefault() here prevents the error
        // "cannot call property of undefined"
        submitButton.simulate('click', { preventDefault() { } });

        expect(mockSetCurrentGuess).toHaveBeenLastCalledWith("");
    });
});

describe('correct guess', () => {

    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = setup(true);
    });

    test('should hide input box', () => {
        const inputBox = findByTestAttr(wrapper, 'input-box');
        expect(inputBox).toHaveLength(0);
    });

    test('should hide submit button', () => {
        const button = findByTestAttr(wrapper, 'submit-button');
        expect(button).toHaveLength(0);
    });


});

describe('incorrect guess', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = setup();
    });

    test('should show input box', () => {
        const inputBox = findByTestAttr(wrapper, 'input-box');
        expect(inputBox).toHaveLength(1);
    });

    test('should show submit button', () => {
        const button = findByTestAttr(wrapper, 'submit-button');
        expect(button).toHaveLength(1);
    });
})
