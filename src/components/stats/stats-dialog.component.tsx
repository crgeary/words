import { PresentationChartBarIcon } from "@heroicons/react/outline";
import { FC } from "react";
import { Dialog } from "../dialog/dialog.component";
import { Stats } from "./stats.component";

export type StatsDialogProps = {
    isOpen: boolean;
    onClose: () => void;
};

export const StatsDialog: FC<StatsDialogProps> = ({ isOpen, onClose }) => {
    return (
        <Dialog
            isOpen={isOpen}
            onClose={onClose}
            heading="Statistics"
            icon={<PresentationChartBarIcon className="w-5 h-5 text-violet-400" />}
        >
            <Stats />
        </Dialog>
    );
};
