import { getOfficialWordleForDate } from "./get-official-wordle-for-date";

jest.mock("../data/words", () => ({
    words: ["", "hello", "", "", "world"],
}));

test("it gets correct wordle word for date", () => {
    const word1 = getOfficialWordleForDate(new Date(2022, 2, 7, 0, 0, 0, 0));
    const word2 = getOfficialWordleForDate(new Date(2022, 4, 14, 0, 0, 0, 0));
    expect(word1).toBe("hello");
    expect(word2).toBe("world");
});
