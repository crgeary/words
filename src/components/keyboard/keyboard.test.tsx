import { render } from "@testing-library/react";
import { Keyboard } from "./keyboard.component";

test("it should match snapshot", () => {
    const { container } = render(
        <Keyboard
            solution="heros"
            guesses={["hello", "world"]}
            onChar={() => {}}
            onEnter={() => {}}
            onDelete={() => {}}
        />,
    );
    expect(container.firstChild).toMatchSnapshot();
});
