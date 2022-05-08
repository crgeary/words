import { words, acceptableWords } from "./words";

test("it has words", () => {
    expect(words.length).toBeGreaterThan(0);
    expect(acceptableWords.length).toBeGreaterThan(0);
});
