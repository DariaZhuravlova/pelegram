import type { FC } from "react"

export const SettingsStatusBar: FC = () => {
    return (
        <div className="status-bar">
            <span className="status-bar__time">9:41</span>

            <div className="flex w-[108px] items-center justify-end gap-[7px]">
                <div className="h-[12px] w-[19px] rounded-sm bg-black" />
                <div className="h-[12px] w-[17px] rounded-sm bg-black" />
                <div className="relative h-[13px] w-[27px]">
                    <div className="absolute inset-0 rounded-[4px] border border-black/35" />
                    <div className="absolute bottom-[18%] left-[2px] top-[32%] w-[21px] rounded-[2.5px] bg-black" />
                </div>
            </div>
        </div>
    )
}
