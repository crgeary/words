import { NextPage } from "next";
import Head from "next/head";
import { Game } from "../components/game/game.component";
import { getRandomWord } from "../utils/get-random-word";

const IndexPage: NextPage = () => {
    const solution = getRandomWord();
    return (
        <>
            <Head>
                <title>Words | Christopher Geary</title>
            </Head>
            <div className="container mx-auto p-1">
                <Game solution={solution} />
            </div>
        </>
    );
};

export default IndexPage;
