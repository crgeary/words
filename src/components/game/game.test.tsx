import { render } from "@testing-library/react";
import { Mode } from "../../types/mode";
import { Game } from "./game.component";

test("it should match snapshot", () => {
    const { container } = render(<Game mode={Mode.Random} solution="hello" />);
    expect(container.firstChild).toMatchSnapshot();
});
