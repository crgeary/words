import { FC } from "react";
import NoDataImage from "./images/no-data.undraw.svg";

export type StatsProps = {
    // ...
};

export const Stats: FC<StatsProps> = () => {
    const stats: [] = [];
    return (
        <div>
            {Array.isArray(stats) && stats.length === 0 ? (
                <div className="border border-dashed rounded p-8 flex justify-center items-center">
                    <div className="text-sm text-center">
                        <p className="mb-2 font-semibold">You haven&apos;t won any games!</p>
                        <p className="mb-8">To see your stats, go back and complete a game.</p>
                        <NoDataImage className="w-48 mx-auto" />
                    </div>
                </div>
            ) : (
                <p>Todo...</p>
            )}
        </div>
    );
};
