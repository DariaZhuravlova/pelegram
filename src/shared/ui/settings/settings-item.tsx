import type {FC, ReactNode} from "react";
import {ChevronRight} from "lucide-react";

type Props = {
    icon: ReactNode;
    title: string;
    value?: string;
};

export const SettingsItem: FC<Props> = ({icon, title, value}) => {
    return (
        <div className="flex items-center justify-between border-b border-zinc-100 py-4 last:border-none">
            <div className="flex items-center gap-3">
                <div className="text-blue-500">{icon}</div>

                <span className="text-[17px]">{title}</span>
            </div>

            <div className="flex items-center gap-2">
                {value && <span className="text-zinc-400">{value}</span>}

                <ChevronRight className="h-4 w-4 text-zinc-300" />
            </div>
        </div>
    );
};
