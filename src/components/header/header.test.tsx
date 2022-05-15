import { render } from "@testing-library/react";

import { Mode } from "../../types/mode";
import { Header } from "./header.component";

test("it should match snapshot", () => {
    const { container } = render(<Header mode={Mode.Random} />);
    expect(container.firstChild).toMatchSnapshot();
});
