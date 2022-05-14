import { Mode } from "./mode";

export type StatsEntry = {
    mode: Mode;
    solution: string;
    guesses: string[];
    date: Date;
};
