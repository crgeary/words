import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

test("it should run prop functions on keypress", async () => {
    const onChar = jest.fn();
    const onDelete = jest.fn();
    const onEnter = jest.fn();

    render(
        <Keyboard
            solution="abcde"
            guesses={[]}
            onChar={onChar}
            onDelete={onDelete}
            onEnter={onEnter}
        />,
    );

    await userEvent.keyboard("a{Backspace}b{Enter}");

    expect(onChar).toHaveBeenCalledTimes(2);
    expect(onDelete).toHaveBeenCalled();
    expect(onEnter).toHaveBeenCalled();
});

test("it should run prop functions on click", async () => {
    const onChar = jest.fn();
    const onDelete = jest.fn();
    const onEnter = jest.fn();

    render(
        <Keyboard
            solution="abcde"
            guesses={[]}
            onChar={onChar}
            onDelete={onDelete}
            onEnter={onEnter}
        />,
    );

    await userEvent.click(screen.getByTestId("key-a"));
    await userEvent.click(screen.getByTestId("key-delete"));
    await userEvent.click(screen.getByTestId("key-b"));
    await userEvent.click(screen.getByTestId("key-enter"));

    expect(onChar).toHaveBeenCalledTimes(2);
    expect(onDelete).toHaveBeenCalled();
    expect(onEnter).toHaveBeenCalled();
});
