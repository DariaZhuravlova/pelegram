import type { FC, ReactNode } from "react"

import { cn } from "@/lib/utils"

type Props = {
    children: ReactNode;
    className?: string;
};

/** Blue glyph icons (Set Emoji, Change Photo, Add Account) */
export const SettingsAccentIcon: FC<Props> = ({ children, className }) => {
    return (
        <div
            className={ cn(
                "flex h-[30px] w-[30px] items-center justify-center pl-2 text-[#008bff]",
                className
            ) }
        >
            { children }
        </div>
    )
}
