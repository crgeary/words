import { FC } from "react";
import { getGuessedRowState } from "../../utils/get-guessed-row-state";
import { Row } from "../row/row.component";

export type BoardProps = {
    solution: string;
    rows: number;
    guesses: string[];
    currentGuess: string;
};

export const Board: FC<BoardProps> = ({ solution, rows, guesses, currentGuess }) => {
    const board = Array.from({
        ...[
            ...guesses.map((letters) => {
                const states = getGuessedRowState(letters, solution);
                return letters.split("").map((char, i) => ({ children: char, state: states[i] }));
            }),
            currentGuess.split("").map((char) => ({ children: char })),
        ],
        length: rows,
    });
    return (
        <div className="grid gap-1">
            {board.map((letters, i) => (
                <Row key={i} letters={letters} />
            ))}
        </div>
    );
};
