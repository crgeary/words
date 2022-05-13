import { render } from "@testing-library/react";

import { Row } from "./row.component";

test("it should match snapshot", () => {
    const letters = "hello";
    const { container } = render(
        <Row letters={letters.split("").map((children) => ({ children }))} />,
    );
    expect(container.firstChild).toMatchSnapshot();
});
