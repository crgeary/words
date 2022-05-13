import { NextPage } from "next";
import Head from "next/head";

import { Game } from "../components/game/game.component";
import { Layout } from "../components/layout/layout.component";
import { Mode } from "../types/mode";
import { getOfficialWordleForDate } from "../utils/get-official-wordle-for-date";

const WordlePage: NextPage = () => {
    const solution = getOfficialWordleForDate(new Date());
    return (
        <>
            <Head>
                <title>Words (Wordle) | Christopher Geary</title>
            </Head>
            <Layout mode={Mode.Wordle}>
                <Game solution={solution} />
            </Layout>
        </>
    );
};

export default WordlePage;
