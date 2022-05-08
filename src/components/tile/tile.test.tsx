import { render } from "@testing-library/react";
import { Tile } from "./tile.component";

test("it should match snapshot", () => {
    const { container } = render(<Tile>A</Tile>);
    expect(container.firstChild).toMatchSnapshot();
});
