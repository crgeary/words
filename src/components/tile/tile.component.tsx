import { FC, PropsWithChildren } from "react";
import classNames from "classnames";
import { CharState } from "../../types/char-state";

export type TileProps = PropsWithChildren<{
    state?: CharState;
}>;

export const Tile: FC<TileProps> = ({ children, state = CharState.Idle }) => {
    return (
        <span
            className={classNames("inline-block rounded w-full h-full p-2 text-center", {
                "bg-green-600 text-white": CharState.Correct === state,
                "bg-yellow-600 text-white": CharState.Present === state,
                "bg-slate-600 text-white": CharState.Absent === state,
                "bg-slate-300 text-gray-700": CharState.Idle === state,
            })}
        >
            {children && <span className="uppercase">{children}</span>}
        </span>
    );
};
