import { FC } from "react";

import { VALID_WORD_LENGTH } from "../../constants";
import { Tile, TileProps } from "../tile/tile.component";

export type RowProps = {
    letters: Pick<TileProps, "children" | "state">[];
};

export const Row: FC<RowProps> = ({ letters }) => {
    return (
        <div className="grid grid-cols-5 gap-1">
            {Array.from({ ...letters, length: VALID_WORD_LENGTH }).map((letter, i) => (
                <Tile key={i} {...letter} />
            ))}
        </div>
    );
};
