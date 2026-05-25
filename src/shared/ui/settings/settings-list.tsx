import type { FC, ReactNode } from "react"

import { SettingsGroup } from "./settings-group"
import { SettingsRow } from "./settings-row"

export type SettingsListItem = {
    id: string;
    icon: ReactNode;
    title: string;
    value?: string;
    showChevron?: boolean;
    iconSlotClassName?: string;
};

export type SettingsListSection = {
    id: string;
    items: SettingsListItem[];
};

type Props = {
    sections: SettingsListSection[];
};

export const SettingsList: FC<Props> = ({ sections }) => {
    return (
        <div className="settings-list">
            { sections.map((section) => (
                <SettingsGroup key={ section.id }>
                    { section.items.map((item, index) => (
                        <SettingsRow
                            key={ item.id }
                            icon={ item.icon }
                            title={ item.title }
                            value={ item.value }
                            showChevron={ item.showChevron }
                            iconSlotClassName={ item.iconSlotClassName }
                            isFirst={ index === 0 }
                        />
                    )) }
                </SettingsGroup>
            )) }
        </div>
    )
}
