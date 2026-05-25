import type { FC, ReactNode } from "react"

import { cn } from "@/lib/utils"

type Props = {
    children: ReactNode;
    className?: string;
};

export const SettingsGroup: FC<Props> = ({ children, className }) => {
    return <div className={ cn("settings-group", className) }>{ children }</div>
}
