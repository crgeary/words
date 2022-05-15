import { render } from "@testing-library/react";
import { Mode } from "../../types/mode";

import { Stats } from "./stats.component";

test("it should match snapshot with no stats", () => {
    const { container } = render(<Stats items={[]} />);
    expect(container.firstChild).toMatchSnapshot();
});

test("it should match snapshot with stats", () => {
    const { container } = render(
        <Stats
            items={[
                {
                    guesses: ["hello", "world"],
                    solution: "world",
                    date: new Date(2022, 4, 14, 0, 0, 0, 0),
                    mode: Mode.Random,
                },
            ]}
        />,
    );
    expect(container.firstChild).toMatchSnapshot();
});
