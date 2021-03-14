export function getLetterMatchCount(guessedWord: string, secretWord: string): number {
    let count: number = 0;

    Array.from(secretWord).forEach(character => {
        if (guessedWord.includes(character)) count++;
    });

    return count;

}
