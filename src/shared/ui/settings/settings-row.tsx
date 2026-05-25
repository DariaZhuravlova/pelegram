import type { FC, ReactNode } from "react"

import { cn } from "@/lib/utils"

import ChevronRightIcon from "@/shared/assets/svg/chevron_right.svg?react"

type Props = {
    icon: ReactNode;
    title: string;
    value?: string;
    showChevron?: boolean;
    isFirst?: boolean;
    iconSlotClassName?: string;
    onClick?: () => void;
};

export const SettingsRow: FC<Props> = ({
    icon,
    title,
    value,
    showChevron = true,
    isFirst = false,
    iconSlotClassName,
    onClick
}) => {
    return (
        <button type="button" onClick={ onClick } className="settings-row">
            <div className={ cn("settings-row__icon-slot", iconSlotClassName) }>{ icon }</div>

            <div className="settings-row__content">
                { !isFirst && <div className="settings-row__separator" aria-hidden /> }

                <div className="settings-row__main">
                    <span className="settings-row__title">{ title }</span>

                    { (value || showChevron) && (
                        <div className="settings-row__trailing">
                            { value && <span className="text-detail">{ value }</span> }

                            { showChevron && (
                                <ChevronRightIcon className="settings-row__chevron" aria-hidden />
                            ) }
                        </div>
                    ) }
                </div>
            </div>
        </button>
    )
}
