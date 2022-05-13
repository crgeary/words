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
                "inline-flex items-center justify-center rounded w-full h-full p-2",
                {
                    "bg-green-600 text-white": CharState.Correct === state,
                    "bg-yellow-600 text-white": CharState.Present === state,
                    "bg-slate-600 text-white": CharState.Absent === state,
                    "bg-slate-300 text-gray-700": CharState.Idle === state,
                },
            )}
        >
            {children && <span className="uppercase font-semibold text-xl">{children}</span>}
        </span>
    );
};
