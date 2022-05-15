import { render } from "@testing-library/react";

import { Dialog } from "./dialog.component";

test("it should match snapshot", () => {
    const { container } = render(<Dialog isOpen={true} onClose={() => {}} />);
    expect(container.firstChild).toMatchSnapshot();
});
