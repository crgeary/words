import { VALID_WORD_LENGTH } from "../constants";
import { words, acceptableWords } from "../data/words";

export const isValidWord = (word: string) => {
    if (word.length !== VALID_WORD_LENGTH) {
        return false;
    }
    return [...words, ...acceptableWords].includes(word.toLowerCase());
};
