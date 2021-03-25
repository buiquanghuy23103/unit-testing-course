import { shallow } from "enzyme";
import React from "react";
import { findByTestAttr } from "../test/testUtils";
import Input from "./input";

const setup = (secretWord = "party") => {
    return shallow(<Input secretWord={ secretWord } />);
}

test('should render without errors', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-input");
    expect(component).toHaveLength(1);
});

describe('state controlled input field', () => {
    test('should update state upon input changes', () => {
        const mockSetCurrentGuess = jest.fn();
        // Mock useState() method
        React.useState = jest.fn(() => ["", mockSetCurrentGuess]);

        const wrapper = setup();
        const inputBox = findByTestAttr(wrapper, "input-box");

        const mockEvent = { target: { value: "train" } };
        inputBox.simulate("change", mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
    });

})

