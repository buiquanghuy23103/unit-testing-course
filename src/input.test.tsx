import { shallow } from "enzyme";
import React from "react";
import { findByTestAttr } from "../test/testUtils";
import Input from "./Input";

const setup = (secretWord = "party") => {
    return shallow(<Input secretWord={ secretWord } />);
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

})

