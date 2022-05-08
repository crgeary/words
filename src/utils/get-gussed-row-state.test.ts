import { CharState } from "../types/char-state";
import { getGuessedRowState } from "./get-guessed-row-state";

test("it returns correct state when guess is correct", () => {
    const state = getGuessedRowState("aabcc", "aabcc");
    expect(state).toEqual([
        CharState.Correct,
        CharState.Correct,
        CharState.Correct,
        CharState.Correct,
        CharState.Correct,
    ]);
});

test("it returns correct state when word is incorrect", () => {
    const testCases = {
        zzzzz: [
            CharState.Absent,
            CharState.Absent,
            CharState.Absent,
            CharState.Absent,
            CharState.Absent,
        ],
        aazzz: [
            CharState.Correct,
            CharState.Correct,
            CharState.Absent,
            CharState.Absent,
            CharState.Absent,
        ],
        abczz: [
            CharState.Correct,
            CharState.Present,
            CharState.Present,
            CharState.Absent,
            CharState.Absent,
        ],
        azcza: [
            CharState.Correct,
            CharState.Absent,
            CharState.Present,
            CharState.Absent,
            CharState.Present,
        ],
        bcabc: [
            CharState.Present,
            CharState.Present,
            CharState.Present,
            CharState.Absent,
            CharState.Correct,
        ],
    };

    Object.keys(testCases).map((testCase) => {
        expect(getGuessedRowState(testCase, "aabcc")).toEqual(
            testCases[testCase as keyof typeof testCases],
        );
    });
});
