import type { FC } from "react"

export const SettingsToolbar: FC = () => {
    return (
        <header className="settings-toolbar">
            <div className="settings-toolbar__inner">
                <button
                    type="button"
                    className="glass settings-toolbar__button settings-toolbar__button--menu"
                    aria-label="Menu"
                >
                    <div className="grid grid-cols-2 gap-[2px]">
                        <div className="settings-toolbar__menu-dot" />
                        <div className="settings-toolbar__menu-dot" />
                        <div className="settings-toolbar__menu-dot" />
                        <div className="settings-toolbar__menu-dot" />
                    </div>
                </button>

                <h1 className="settings-toolbar__title">Settings</h1>

                <button
                    type="button"
                    className="glass settings-toolbar__button settings-toolbar__button--edit"
                >
                    <span className="text-body-medium">Edit</span>
                </button>
            </div>
        </header>
    )
}
