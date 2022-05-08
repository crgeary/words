import { render } from "@testing-library/react";
import { Board } from "./board.component";

test("it should match snapshot", () => {
    const { container } = render(
        <Board rows={5} solution="heros" guesses={["hello", "world"]} currentGuess="" />,
    );
    expect(container.firstChild).toMatchSnapshot();
});
