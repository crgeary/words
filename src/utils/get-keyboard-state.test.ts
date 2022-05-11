import { CharState } from "../types/char-state";
import { getKeyboardState } from "./get-keyboard-state";

// green, even if 1 or 2 letters

test("it returns empty state for no guesses", () => {
    const state = getKeyboardState([], "abcde");
    expect(state).toEqual({});
});

test("it returns the correct state for guesses", () => {
    const state1 = getKeyboardState(["azzzz", "abczz", "abzza"], "aabcd");
    const state2 = getKeyboardState(["abcaa", "dxyza"], "abccd");
    const state3 = getKeyboardState(["zzzzz"], "abcde");

    expect(state1).toEqual({
        a: CharState.Correct,
        b: CharState.Present,
        c: CharState.Present,
        z: CharState.Absent,
    });
    expect(state2).toEqual({
        a: CharState.Correct,
        b: CharState.Correct,
        c: CharState.Correct,
        d: CharState.Present,
        x: CharState.Absent,
        y: CharState.Absent,
        z: CharState.Absent,
    });
    expect(state3).toEqual({
        z: CharState.Absent,
    });
});
