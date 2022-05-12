import { render } from "@testing-library/react";
import { Key } from "./key.component";

test("it should match snapshot", () => {
    const { container } = render(<Key>A</Key>);
    expect(container.firstChild).toMatchSnapshot();
});
