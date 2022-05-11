import { CharState } from "../types/char-state";

export const getKeyboardState = (guesses: string[], solution: string) => {
    const splitSolution = solution.split("");
    return guesses.reduce((acc, guess) => {
        return guess.split("").reduce((acc, char, i) => {
            if (!splitSolution.includes(char)) {
                acc[char] = CharState.Absent;
            } else if (char === splitSolution[i]) {
                acc[char] = CharState.Correct;
            } else if (acc[char] !== CharState.Correct) {
                acc[char] = CharState.Present;
            }
            return acc;
        }, acc);
    }, {} as Record<string, CharState>);
};
