import type { FC, ReactNode } from "react"

import ChevronRightIcon from "@/shared/assets/svg/chevron_right.svg?react"

type Props = {
    icon: ReactNode;
    title: string;
    value?: string;
};

export const SettingsItem: FC<Props> = ({ icon, title, value }) => {
    return (
        <div className="flex items-center justify-between border-b border-border py-4 last:border-none">
            <div className="flex items-center gap-3">
                <div className="text-accent">{ icon }</div>

                <span className="text-body-medium">{ title }</span>
            </div>

            <div className="flex items-center gap-2">
                { value && <span className="text-detail">{ value }</span> }

                <ChevronRightIcon className="settings-row__chevron" aria-hidden />
            </div>
        </div>
    )
}
