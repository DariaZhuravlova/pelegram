import type { FC } from "react"

import { ScrollArea } from "@/components/ui/scroll-area"
import { PhoneFrame } from "@/shared/ui/phone-frame/phone-frame"
import { BottomTabs } from "@/shared/ui/bottom-tabs/bottom-tabs"
import { SettingsList } from "@/shared/ui/settings/settings-list"
import { SettingsStatusBar } from "@/shared/ui/settings/settings-status-bar"
import { SettingsToolbar } from "@/shared/ui/settings/settings-toolbar"

import { settingsSections } from "./settings-sections"

export const HomePage: FC = () => {
    return (
        <PhoneFrame>
            <div className="settings-screen">
                <SettingsStatusBar />
                <SettingsToolbar />

                <ScrollArea
                    className="absolute inset-x-0 bottom-0 z-0 h-auto [&>[data-slot=scroll-area-viewport]]:h-full"
                    style={ { top: "var(--content-top)" } }
                >
                    <div className="settings-scroll-inner">
                        <SettingsList sections={ settingsSections } />
                    </div>
                </ScrollArea>

                <BottomTabs />
            </div>
        </PhoneFrame>
    )
}
