import { FC, PropsWithChildren } from "react";
import classNames from "classnames";
import { CharState } from "../../types/char-state";

export type TileProps = PropsWithChildren<{
    state?: CharState;
}>;

export const Tile: FC<TileProps> = ({ children, state = CharState.Idle }) => {
    return (
        <span
            className={classNames(
                "inline-flex items-center border justify-center rounded w-full h-full p-2",
                {
                    "bg-green-500 border-green-600 text-green-50": CharState.Correct === state,
                    "bg-yellow-500 border-yellow-600 text-yellow-900": CharState.Present === state,
                    "bg-slate-500 border-slate-600 text-slate-200": CharState.Absent === state,
                    "bg-white border-violet-200 text-slate-600": CharState.Idle === state,
                },
            )}
        >
            {children && <span className="uppercase font-semibold text-xl">{children}</span>}
        </span>
    );
};
