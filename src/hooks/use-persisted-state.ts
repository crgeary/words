import { useEffect, useState } from "react";

export const usePersistedState = <S>(key: string, initialState: S) => {
    const [state, setState] = useState<S>(() => {
        if (typeof window === "undefined") {
            return initialState;
        }
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialState;
        } catch (err) {
            console.error(err);
            return initialState;
        }
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState] as const;
};
