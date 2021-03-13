import { getLetterMarchCount } from "./index";

describe("getLetterMatchCount", () => {
    const secretWord = "party";
    test("return 0 when there is no matching", () => {
        const guessedWord = "bone";
        const count = getLetterMarchCount(guessedWord, secretWord);
        expect(count).toBe(0);
    });
    test("return the correct count when there are 3 matchings", () => {
        const guessedWord = "train";
        const count = getLetterMarchCount(guessedWord, secretWord);
        expect(count).toBe(3);
    });
    test("return the correct count when there are duplicate matchings", () => {
        const guessedWord = "parka";
        const count = getLetterMarchCount(guessedWord, secretWord);
        expect(count).toBe(3);
    });
});