import { NextPage } from "next";
import Head from "next/head";
import { Game } from "../components/game/game.component";

const IndexPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Words | Christopher Geary</title>
            </Head>
            <div className="container mx-auto p-1">
                <Game />
            </div>
        </>
    );
};

export default IndexPage;
