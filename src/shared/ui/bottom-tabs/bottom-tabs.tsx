import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { cn } from "@/lib/utils"

import ChatsIcon from "@/shared/assets/svg/chats.svg?react"
import SettingsIcon from "@/shared/assets/svg/settings.svg?react"
import CallsIcon from "@/shared/assets/svg/calls.svg?react"
import ContactsIcon from "@/shared/assets/svg/contacts.svg?react"
import SearchIcon from "@/shared/assets/svg/search.svg?react"

const tabs = [
    {
        value: "contacts",
        label: "Contacts",
        icon: ContactsIcon
    },
    {
        value: "calls",
        label: "Calls",
        icon: CallsIcon
    },
    {
        value: "chats",
        label: "Chats",
        icon: ChatsIcon
    },
    {
        value: "settings",
        label: "Settings",
        icon: SettingsIcon
    }
] as const

const tabZIndex = [1, 2, 3, 4] as const

export const BottomTabs = () => {
    return (
        <nav
            className="tab-bar"
            aria-label="Main"
        >
            <Tabs
                defaultValue="settings"
                className="flex min-w-0 flex-1 gap-0 data-[orientation=horizontal]:flex-row"
            >
                <TabsList
                    className={ cn(
                        "tab-bar-list",
                        "h-auto w-full border-0 bg-transparent p-0 shadow-none"
                    ) }
                >
                    <div
                        className="tab-bar-list__bg"
                        aria-hidden
                    >
                        <div className="tab-bar-list__fill" />
                        <div className="tab-bar-list__glass" />
                    </div>

                    { tabs.map((tab, index) => {
                        const Icon = tab.icon
                        const isLast = index === tabs.length - 1

                        return (
                            <TabsTrigger
                                key={ tab.value }
                                value={ tab.value }
                                style={ { zIndex: tabZIndex[index] } }
                                className={ cn("tab-trigger", !isLast && "tab-trigger--overlap") }
                            >
                                <span className="tab-icon-slot">
                                    <Icon
                                        className="tab-icon"
                                        aria-hidden
                                    />
                                </span>
                                <span className="tab-label">{ tab.label }</span>
                            </TabsTrigger>
                        )
                    }) }
                </TabsList>
            </Tabs>

            <button
                type="button"
                className="search-button glass glass-surface"
                aria-label="Search"
            >
                <span className="search-trigger">
                    <SearchIcon className="tab-icon" />
                </span>
            </button>
        </nav>
    )
}
