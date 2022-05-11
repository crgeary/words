import { NextPage } from "next";
import Head from "next/head";
import { Game } from "../components/game/game.component";
import { getOfficialWordleForDate } from "../utils/get-official-wordle-for-date";

const WordlePage: NextPage = () => {
    const solution = getOfficialWordleForDate(new Date());
    return (
        <>
            <Head>
                <title>Words (Wordle) | Christopher Geary</title>
            </Head>
            <div className="container mx-auto p-1">
                <Game solution={solution} />
            </div>
        </>
    );
};

export default WordlePage;
