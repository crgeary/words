import { ComponentPropsWithoutRef, FC } from "react";

export type IconButtonProps = ComponentPropsWithoutRef<"button"> & {
    //
};

export const IconButton: FC<IconButtonProps> = ({ children }) => {
    return (
        <button className="p-2 rounded-full text-violet-800 hover:bg-violet-100 hover:text-violet-900">
            {children}
        </button>
    );
};
