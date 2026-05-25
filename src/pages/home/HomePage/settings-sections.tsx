import type { FC, ReactNode, SVGProps } from "react"
import type { SettingsListSection } from "@/shared/ui/settings/settings-list"
import { SettingsAccentIcon } from "@/shared/ui/settings/settings-accent-icon"

import AddIcon from "@/shared/assets/svg/add.svg?react"
import ChangePhotoIcon from "@/shared/assets/svg/change_profile_photo.svg?react"
import ChatFoldersIcon from "@/shared/assets/svg/chat_folders.svg?react"
import DevicesIcon from "@/shared/assets/svg/devices.svg?react"
import NotificationsIcon from "@/shared/assets/svg/notifications.svg?react"
import ProfileIcon from "@/shared/assets/svg/profile.svg?react"
import RecentIcon from "@/shared/assets/svg/recent.svg?react"
import SavedIcon from "@/shared/assets/svg/saved.svg?react"
import SetEmojiIcon from "@/shared/assets/svg/set_emoji.svg?react"
import WalletIcon from "@/shared/assets/svg/wallet.svg?react"

type Icon = FC<SVGProps<SVGSVGElement>>;

const slot = "settings-row__icon-slot--accent"

const icon = (Icon: Icon) => (
    <Icon
        className="settings-row__icon"
        aria-hidden
    />
)

const accent = (Icon: Icon) => (
    <SettingsAccentIcon>
        <Icon className="h-6 w-6" />
    </SettingsAccentIcon>
)

const row = (
    id: string,
    title: string,
    icon: ReactNode,
    value?: string,
    iconSlotClassName?: string
) => ({ id, title, icon, value, iconSlotClassName })

const accentItems = [
    ["emoji", "Set Emoji Status", SetEmojiIcon],
    ["photo", "Change Profile Photo", ChangePhotoIcon],
    ["add", "Add Account", AddIcon]
] as const

const mainItems = [
    ["profile", "My Profile", ProfileIcon],
    ["wallet", "Wallet", WalletIcon],
    ["saved", "Saved Messages", SavedIcon],
    ["recent", "Recent Calls", RecentIcon],
    ["folders", "Chat Folders", ChatFoldersIcon]
] as const

export const settingsSections: SettingsListSection[] = [
    {
        id: "profile-actions",
        items: accentItems
            .slice(0, 2)
            .map(([id, title, Icon]) => row(id, title, accent(Icon), undefined, slot))
    },
    {
        id: "account",
        items: [row("add", "Add Account", accent(AddIcon), undefined, slot)]
    },
    {
        id: "main",
        items: [
            ...mainItems.map(([id, title, Icon]) => row(id, title, icon(Icon))),
            row("devices", "Devices", icon(DevicesIcon), "3")
        ]
    },
    {
        id: "prefs",
        items: [row("notifications", "Notifications and Sounds", icon(NotificationsIcon))]
    }
]
