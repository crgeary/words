export enum Mode {
    Random = "random",
    Wordle = "wordle",
}

export type ModeConfig = {
    [k in Mode]: { name: string };
};
