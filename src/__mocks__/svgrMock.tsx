import { forwardRef } from "react";

const SvgrMock = forwardRef<HTMLSpanElement, {}>((props, ref) => (
    <span data-name="svgr-mock" ref={ref} {...props} />
));

SvgrMock.displayName = "SvgrMock";

export const ReactComponent = SvgrMock;
export default SvgrMock;
