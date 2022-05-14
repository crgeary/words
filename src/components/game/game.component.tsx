import { FC, useEffect, useState } from "react";

import { VALID_WORD_LENGTH } from "../../constants";
import { useNumber } from "../../hooks/use-number";
import { usePersistedState } from "../../hooks/use-persisted-state";
import { GameState } from "../../types/game-state";
import { Mode } from "../../types/mode";
import { StatsEntry } from "../../types/stats";
import { isValidWord } from "../../utils/is-valid-word";
import { Board } from "../board/board.component";
import { Keyboard } from "../keyboard/keyboard.component";

export type GameProps = {
    solution: string;
    mode: Mode;
};

export const Game: FC<GameProps> = ({ solution, mode }) => {
    const rowCount = useNumber({ defaultValue: 6, min: 6, max: 10 });
    const [guesses, setGuesses] = useState<string[]>([]);
    const [currentGuess, setCurrentGuess] = useState("");
    const [status, setStatus] = useState<GameState>(GameState.Idle);
    const [statistics, setStatistics] = usePersistedState<StatsEntry[]>("stats", []);

    const addGuess = () => {
        if (
            status === GameState.Success ||
            status === GameState.Fail ||
            guesses.length >= rowCount.value ||
            guesses.includes(currentGuess) ||
            !isValidWord(currentGuess)
        ) {
            return;
        }
        setGuesses((v) => [...v, currentGuess]);
        setCurrentGuess("");
    };

    useEffect(() => {
        if (guesses.length === 0) {
            setStatus(GameState.Idle);
        } else if (guesses.at(-1) === solution) {
            setStatus(GameState.Success);
            setStatistics((s) => [
                ...s,
                {
                    mode,
                    guesses,
                    solution,
                    date: new Date(),
                },
            ]);
        } else if (guesses.length >= rowCount.value && guesses.at(-1) !== solution) {
            setStatus(GameState.Fail);
        } else {
            setStatus(GameState.Playing);
        }
    }, [guesses, rowCount.value, solution, mode, setStatistics]);

    return (
        <div className="h-full flex flex-col py-4 touch-manipulation">
            <div className="flex-grow mb-4">
                <Board
                    rows={rowCount.value}
                    solution={solution}
                    guesses={guesses}
                    currentGuess={currentGuess}
                />
            </div>
            <div className="flex-grow-0">
                <Keyboard
                    solution={solution}
                    guesses={guesses}
                    onChar={(char) => {
                        if (currentGuess.length < VALID_WORD_LENGTH) {
                            setCurrentGuess((guess) => `${guess}${char}`);
                        }
                    }}
                    onEnter={() => addGuess()}
                    onDelete={() => {
                        setCurrentGuess((guess) => guess.substring(0, guess.length - 1));
                    }}
                />
            </div>
        </div>
    );
};
