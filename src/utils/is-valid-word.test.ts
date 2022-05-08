import { isValidWord } from "./is-valid-word";

jest.mock("../data/words", () => ({
    words: ["aaaaa"],
    acceptableWords: ["bbbbb"],
}));

test("it matches known valid words", () => {
    expect(isValidWord("aaaaa")).toBe(true);
    expect(isValidWord("bbbbb")).toBe(true);
});

test("it fails on unknown word", () => {
    expect(isValidWord("zzzzz")).toBe(false);
});

test("it fails on incorrect world length", () => {
    expect(isValidWord("a")).toBe(false);
    expect(isValidWord("abcdefghijklmnopqrstuvwxyz")).toBe(false);
});
