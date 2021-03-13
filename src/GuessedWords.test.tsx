import { shallow, ShallowWrapper } from "enzyme";
import { findByTestAttr } from "../test/testUtils";
import GuessedWords, { GuessedWordsProps } from "./GuessedWords";

const setup = (props: GuessedWordsProps) => {
    return shallow(<GuessedWords { ...props } />)
}

describe("if there are no guessed words", () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = setup({ guessedWords: [] });
    });

    test("renders without error", () => {
        const component = findByTestAttr(wrapper, "component-guessed-words");
        expect(component).toHaveLength(1);
    });
    test("renders instruction", () => {
        const instruction = findByTestAttr(wrapper, "instruction");
        expect(instruction.text().length).not.toBe(0);
    });
});

describe("if there are guessed words", () => {

});