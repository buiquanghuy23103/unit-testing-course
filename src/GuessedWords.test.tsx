import { shallow } from "enzyme";
import { findByTestAttr } from "../test/testUtils";
import GuessedWords, { GuessedWordsProps } from "./GuessedWords";

const setup = (props: GuessedWordsProps) => {
    return shallow(<GuessedWords { ...props } />)
}

describe("if there are no guessed words", () => {
    test("renders without error", () => {
        const wrapper = setup({ guessedWords: [] });
        const component = findByTestAttr(wrapper, "component-guessed-words");
        expect(component).toHaveLength(1);
    });
    test("renders instruction", () => {
        const wrapper = setup({ guessedWords: [] });
        const instruction = findByTestAttr(wrapper, "instruction");
        expect(instruction.text().length).not.toBe(0);
    });
});

describe("if there are guessed words", () => {

});