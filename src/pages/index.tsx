import { NextPage } from "next";
import Head from "next/head";

import { Game } from "../components/game/game.component";
import { Layout } from "../components/layout/layout.component";
import { Mode } from "../types/mode";
import { getRandomWord } from "../utils/get-random-word";

const IndexPage: NextPage = () => {
    const solution = getRandomWord();
    return (
        <>
            <Head>
                <title>Words | Christopher Geary</title>
            </Head>
            <Layout mode={Mode.Random}>
                <Game solution={solution} />
            </Layout>
        </>
    );
};

export default IndexPage;
