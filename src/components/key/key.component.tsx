import classNames from "classnames";
import { ComponentPropsWithoutRef, FC } from "react";
import { CharState } from "../../types/char-state";

export type KeyProps = ComponentPropsWithoutRef<"button"> & {
    state?: CharState;
};

export const Key: FC<KeyProps> = ({ children, className, state = CharState.Idle, ...props }) => {
    return (
        <button
            className={classNames("p-2", className, {
                "bg-green-600 text-white": CharState.Correct === state,
                "bg-yellow-600 text-white": CharState.Present === state,
                "bg-slate-400 text-slate-300": CharState.Absent === state,
                "bg-slate-600 text-white": CharState.Idle === state,
            })}
            {...props}
        >
            <span className="uppercase">{children}</span>
        </button>
    );
};
