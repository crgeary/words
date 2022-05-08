import { VALID_WORD_LENGTH } from "../constants";
import { CharState } from "../types/char-state";

export const getGuessedRowState = (guess: string, solution: string) => {
    const checked = Array.from({ length: 5 }).fill(false);
    const splitSolution = solution.split("");
    return guess.split("").reduce((acc, curr, i) => {
        if (curr === splitSolution[i]) {
            acc[i] = CharState.Correct;
            checked[i] = true;
        } else if (splitSolution.includes(curr)) {
            const currCharIndex = splitSolution.findIndex((x, i2) => x === curr && !checked[i2]);
            if (currCharIndex > -1) {
                acc[i] = CharState.Present;
                checked[currCharIndex] = true;
            }
        }
        return acc;
    }, Array.from({ length: VALID_WORD_LENGTH }).fill(CharState.Absent));
};
