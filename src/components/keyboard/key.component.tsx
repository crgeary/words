import classNames from "classnames";
import { ComponentPropsWithoutRef, FC } from "react";
import { CharState } from "../../types/char-state";

export type KeyProps = ComponentPropsWithoutRef<"button"> & {
    state?: CharState;
};

export const Key: FC<KeyProps> = ({ children, className, state = CharState.Idle, ...props }) => {
    return (
        <button
            className={classNames(
                "inline-flex justify-center items-center px-1 py-2 border shadow-sm rounded tracking-tight uppercase font-medium text-sm text-center active:shadow-inner",
                className,
                {
                    "bg-green-500 border-green-600 text-green-50": CharState.Correct === state,
                    "bg-yellow-500 border-yellow-600 text-yellow-9000": CharState.Present === state,
                    "bg-slate-100 border-slate-200 text-slate-300": CharState.Absent === state,
                    "bg-white border-violet-200 text-slate-600": CharState.Idle === state,
                },
            )}
            {...props}
        >
            {children}
        </button>
    );
};
