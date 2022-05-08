import { FC, PropsWithChildren } from "react";
import classNames from "classnames";

export enum TileState {
    Correct = "correct",
    Present = "present",
    Absent = "absent",
    Idle = "idle",
}

export type TileProps = PropsWithChildren<{
    state?: TileState;
}>;

export const Tile: FC<TileProps> = ({ children, state = TileState.Idle }) => {
    return (
        <span
            className={classNames("inline-block w-full h-full p-2 text-center", {
                "bg-green-600 text-white": TileState.Correct === state,
                "bg-yellow-600 text-white": TileState.Present === state,
                "bg-slate-600 text-white": TileState.Absent === state,
                "bg-slate-300 text-gray-700": TileState.Idle === state,
            })}
        >
            {children && <span className="uppercase">{children}</span>}
        </span>
    );
};
