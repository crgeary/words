import { BackspaceIcon } from "@heroicons/react/outline";
import { FC, useEffect } from "react";
import { getKeyboardState } from "../../utils/get-keyboard-state";
import { Key } from "./key.component";

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
            <div className="flex justify-center -mx-0.5">
                {`qwertyuiop`.split("").map((key) => (
                    <Key
                        key={key}
                        state={states[key]}
                        className="flex-grow flex-shrink basis-0 mx-0.5"
                        onTouchStart={() => window?.navigator?.vibrate?.(75)}
                        onClick={() => onChar(key)}
                        data-testid={`key-${key}`}
                    >
                        {key}
                    </Key>
                ))}
            </div>
            <div className="flex justify-center -mx-0.5">
                <span className="flex-grow-0.5 flex-shrink basis-0"></span>
                {`asdfghjkl`.split("").map((key) => (
                    <Key
                        key={key}
                        state={states[key]}
                        className="flex-grow flex-shrink basis-0 mx-0.5"
                        onTouchStart={() => window?.navigator?.vibrate?.(75)}
                        onClick={() => onChar(key)}
                        data-testid={`key-${key}`}
                    >
                        {key}
                    </Key>
                ))}
                <span className="flex-grow-0.5 flex-shrink basis-0"></span>
            </div>
            <div className="flex justify-center -mx-0.5">
                <Key
                    className="flex-grow-1.5 flex-shrink basis-0 mx-0.5"
                    onTouchStart={() => window?.navigator?.vibrate?.(75)}
                    onClick={() => onEnter()}
                    data-testid="key-enter"
                >
                    <span className="text-xs">Enter</span>
                    <span className="sr-only">Enter</span>
                </Key>
                {`zxcvbnm`.split("").map((key) => (
                    <Key
                        key={key}
                        state={states[key]}
                        className="flex-grow flex-shrink basis-0 mx-0.5"
                        onTouchStart={() => window?.navigator?.vibrate?.(75)}
                        onClick={() => onChar(key)}
                        data-testid={`key-${key}`}
                    >
                        {key}
                    </Key>
                ))}
                <Key
                    className="flex-grow-1.5 flex-shrink basis-0 mx-0.5"
                    onTouchStart={() => window?.navigator?.vibrate?.(75)}
                    onClick={() => onDelete()}
                    data-testid="key-delete"
                >
                    <BackspaceIcon className="w-5 h-5" />
                    <span className="sr-only">Delete</span>
                </Key>
            </div>
        </div>
    );
};
