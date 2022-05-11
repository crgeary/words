import { words } from "../data/words";

const initialDate = new Date(2021, 5, 19, 0, 0, 0, 0);

export const getOfficialWordleForDate = (date: Date) => {
    const daysSinceInitialDate = Math.round(
        (new Date(date).setHours(0, 0, 0, 0) - new Date(initialDate).setHours(0, 0, 0, 0)) / 864e5,
    );
    return words[daysSinceInitialDate % words.length];
};
