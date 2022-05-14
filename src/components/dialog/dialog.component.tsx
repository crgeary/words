import { Dialog as HeadlessDialog } from "@headlessui/react";
import { PresentationChartBarIcon, XIcon } from "@heroicons/react/outline";
import { FC, PropsWithChildren, ReactNode } from "react";

export type DialogProps = PropsWithChildren<{
    icon?: ReactNode;
    heading?: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}>;

export const Dialog: FC<DialogProps> = ({ icon, heading, children, isOpen = false, onClose }) => {
    return (
        <HeadlessDialog open={isOpen} onClose={() => onClose()} className="relative z-50">
            <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center justify-center p-6">
                <HeadlessDialog.Panel className="relative max-h-full mx-auto flex flex-col w-full max-w-lg rounded bg-white px-5 pt-12 pb-5 text-slate-600">
                    <button
                        className="absolute top-2 right-2 p-2 rounded-full text-violet-800 hover:bg-violet-100 hover:text-violet-900"
                        onClick={() => onClose()}
                    >
                        <XIcon className="w-5 h-5" />
                        <span className="sr-only">Close {heading}</span>
                    </button>
                    {heading && (
                        <HeadlessDialog.Title className="flex items-center justify-center gap-2 font-semibold text-violet-800">
                            {heading}
                            {icon}
                        </HeadlessDialog.Title>
                    )}
                    <div className="mt-6 overflow-y-auto">{children}</div>
                </HeadlessDialog.Panel>
            </div>
        </HeadlessDialog>
    );
};
