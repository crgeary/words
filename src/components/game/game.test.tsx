import { render } from "@testing-library/react";
import { Game } from "./game.component";

test("it should match snapshot", () => {
    const { container } = render(<Game solution="hello" />);
    expect(container.firstChild).toMatchSnapshot();
});
