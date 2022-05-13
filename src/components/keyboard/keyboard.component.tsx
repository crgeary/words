import { FC, useEffect } from "react";
import { getKeyboardState } from "../../utils/get-keyboard-state";
import { Key } from "../key/key.component";

export enum KeyCodes {
    Enter = "Enter",
    Backspace = "Backspace",
}

export type KeyboardProps = {
    solution: string;
    guesses: string[];
    onChar: (char: string) => void;
    onEnter: () => void;
    onDelete: () => void;
};

export const Keyboard: FC<KeyboardProps> = ({ solution, guesses, onChar, onEnter, onDelete }) => {
    const states = getKeyboardState(guesses, solution);
    const layout = [`qwertyuiop`.split(""), `asdfghjkl`.split(""), `zxcvbnm`.split("")];

    useEffect(() => {
        const handler = ({ key }: KeyboardEvent) => {
            if (key === KeyCodes.Enter) {
                onEnter();
            } else if (key === KeyCodes.Backspace) {
                onDelete();
            } else {
                if (key.length === 1 && key.toLowerCase() >= "a" && key.toUpperCase() <= "z") {
                    onChar(key);
                }
            }
        };
        window.addEventListener("keyup", handler);
        return () => {
            window.removeEventListener("keyup", handler);
        };
    });

    return (
        <div className="flex flex-col gap-1">
            {layout.map((row, i) => (
                <div className="flex gap-1" key={i}>
                    {row.map((key) => (
                        <Key
                            key={key}
                            state={states[key]}
                            className="flex-auto"
                            onClick={() => {
                                window?.navigator?.vibrate?.(50);
                                onChar(key);
                            }}
                            data-testid={`key-${key}`}
                        >
                            {key}
                        </Key>
                    ))}
                </div>
            ))}
            <div className="flex gap-1">
                <Key
                    className="flex-auto"
                    onClick={() => {
                        window?.navigator?.vibrate?.(50);
                        onEnter();
                    }}
                    data-testid="key-enter"
                >
                    Enter
                </Key>
                <Key
                    className="flex-auto"
                    onClick={() => {
                        window?.navigator?.vibrate?.(50);
                        onDelete();
                    }}
                    data-testid="key-delete"
                >
                    Delete
                </Key>
            </div>
        </div>
    );
};
