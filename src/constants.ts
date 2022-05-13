import { Mode, ModeConfig } from "./types/mode";

export const MODE_CONFIG: ModeConfig = {
    [Mode.Random]: {
        name: "Random",
    },
    [Mode.Wordle]: {
        name: "Wordle",
    },
};

export const VALID_WORD_LENGTH = 5;
