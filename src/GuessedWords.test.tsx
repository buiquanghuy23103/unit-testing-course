import { shallow, ShallowWrapper } from "enzyme";
import { findByTestAttr } from "../test/testUtils";
import GuessedWords, { GuessedWord, GuessedWordsProps } from "./GuessedWords";

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
    let wrapper: ShallowWrapper;

    const sampleGuessedWords: Array<GuessedWord> = [
        { word: "Lucky", letterMatchCount: 3 },
        { word: "Really", letterMatchCount: 1 },
        { word: "Damm", letterMatchCount: 5 }
    ]
    beforeEach(() => {
        wrapper = setup({ guessedWords: sampleGuessedWords });
    });

    test("renders without error", () => {
        const component = findByTestAttr(wrapper, "component-guessed-words");
        expect(component).toHaveLength(1);
    });

    test("renders `guessed words` section", () => {
        const guessedWordSection = findByTestAttr(wrapper, "guessed-words-section");
        expect(guessedWordSection).toHaveLength(1);
    });

    test("renders correct number of guessed words", () => {
        const guessedWordNodes = findByTestAttr(wrapper, "guessed-word");
        expect(guessedWordNodes).toHaveLength(sampleGuessedWords.length);
    });
});