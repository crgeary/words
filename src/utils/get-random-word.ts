import { words } from "../data/words";

const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getRandomWord = () => {
    const index = getRandomNumber(0, words.length - 1);
    return words[index];
};
