import { NextPage } from "next";
import { Game } from "../components/game/game.component";

const IndexPage: NextPage = () => {
    return (
        <div className="container mx-auto p-1">
            <Game />
        </div>
    );
};

export default IndexPage;
