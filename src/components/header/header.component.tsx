import { FC } from "react";
import { AdjustmentsIcon, MenuIcon, PresentationChartBarIcon } from "@heroicons/react/outline";
import { IconButton } from "./icon-button.component";
import { Mode } from "../../types/mode";
import { MODE_CONFIG } from "../../constants";

type HeaderProps = {
    mode?: Mode;
};

export const Header: FC<HeaderProps> = ({ mode }) => {
    return (
        <header
            role="banner"
            className="h-14 px-3 flex items-center justify-between bg-white border-t-2 border-b border-t-violet-800 border-b-violet-200"
        >
            <div className="w-20">
                <IconButton>
                    <MenuIcon className="h-5 w-5" />
                    <span className="sr-only">Menu</span>
                </IconButton>
            </div>
            <p className="text-center">
                <strong className="block text-lg font-semibold text-slate-700 leading-none">
                    Words
                </strong>
                {mode && (
                    <span className="block mt-1 text-xs text-slate-400 leading-none">
                        Mode: {MODE_CONFIG[mode].name}
                    </span>
                )}
            </p>
            <div className="w-20 flex justify-end">
                <IconButton>
                    <PresentationChartBarIcon className="h-5 w-5" />
                    <span className="sr-only">Stats</span>
                </IconButton>
                <IconButton>
                    <AdjustmentsIcon className="h-5 w-5" />
                    <span className="sr-only">Settings</span>
                </IconButton>
            </div>
        </header>
    );
};
