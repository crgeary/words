import { FC, PropsWithChildren } from "react";
import { Mode } from "../../types/mode";
import { Header } from "../header/header.component";

export type LayoutProps = PropsWithChildren<{
    mode?: Mode;
}>;

export const Layout: FC<LayoutProps> = ({ mode, children }) => {
    return (
        <>
            <Header mode={mode} />
            <div role="main" className="h-main-full max-w-lg mx-auto px-3">
                {children}
            </div>
        </>
    );
};
