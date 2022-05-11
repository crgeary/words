import { getRandomWord } from "./get-random-word";

jest.mock("../data/words", () => ({
    words: ["", "", "", "hello", ""],
}));

beforeEach(() => {
    jest.spyOn(global.Math, "random").mockReturnValue(0.7);
});

afterEach(() => {
    jest.spyOn(global.Math, "random").mockRestore();
});

test("it gets a random word", () => {
    const word = getRandomWord();
    expect(word).toBe("hello");
});
