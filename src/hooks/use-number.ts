import { useState } from "react";
import { isNumber } from "lodash";

type UseNumberOptions = {
    defaultValue?: number;
    min?: number;
    max?: number;
};

export const useNumber = ({ defaultValue, min, max }: UseNumberOptions) => {
    const [value, setValue] = useState(defaultValue ?? min ?? 0);

    const increment = () => {
        setValue((v) => (isNumber(max) && v >= max ? max : v + 1));
    };

    const decrement = () => {
        setValue((v) => (isNumber(min) && v <= min ? min : v - 1));
    };

    return {
        value,
        increment,
        decrement,
    };
};
