import classNames from "classnames";
import { FC, useEffect, useState } from "react";

import { VALID_WORD_LENGTH } from "../../constants";
import { useNumber } from "../../hooks/use-number";
import { GameState } from "../../types/game-state";
import { isValidWord } from "../../utils/is-valid-word";
import { Board } from "../board/board.component";
import { Keyboard } from "../keyboard/keyboard.component";

export type GameProps = {
    solution: string;
};

export const Game: FC<GameProps> = ({ solution }) => {
    const rowCount = useNumber({ defaultValue: 5, min: 5, max: 10 });
    const [guesses, setGuesses] = useState<string[]>([]);
    const [currentGuess, setCurrentGuess] = useState("");
    const [status, setStatus] = useState<GameState>(GameState.Idle);

    const addGuess = () => {
        if (
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
        } else if (guesses.length >= rowCount.value && guesses.at(-1) !== solution) {
            setStatus(GameState.Fail);
        } else {
            setStatus(GameState.Playing);
        }
    }, [guesses, rowCount.value, solution]);

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
