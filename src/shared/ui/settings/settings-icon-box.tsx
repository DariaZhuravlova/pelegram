import type { CSSProperties, FC, ReactNode } from "react"

import { cn } from "@/lib/utils"

type Props = {
    background: string;
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
};

export const SettingsIconBox: FC<Props> = ({ background, children, className, style }) => {
    return (
        <div
            className={ cn(
                "relative flex h-[var(--settings-icon-size)] w-[var(--settings-icon-size)] items-center justify-center overflow-hidden rounded-[var(--radius-icon)]",
                className
            ) }
            style={ { background, ...style } }
        >
            <div className="settings-icon-box__shine" />
            { children && <span className="settings-icon-box__glyph">{ children }</span> }
        </div>
    )
}
