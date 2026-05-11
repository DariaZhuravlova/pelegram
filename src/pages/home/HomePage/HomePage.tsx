// react
import type {FC} from "react";
import {Bell, ChevronRight, Plus, Smartphone, User, Wallet, Bookmark, Phone} from "lucide-react";

import {PhoneFrame} from "@/shared/ui/phone-frame/phone-frame";

const Row = ({icon, title, value}: {icon: React.ReactNode; title: string; value?: string}) => {
    return (
        <button className="flex h-14 w-full items-center px-4 active:bg-neutral-100">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
                {icon}
            </div>

            <div className="ml-3 flex flex-1 items-center border-b border-neutral-200 py-4">
                <span className="text-[15px] text-black">{title}</span>

                <div className="ml-auto flex items-center gap-2">
                    {value && <span className="text-[14px] text-neutral-400">{value}</span>}

                    <ChevronRight className="h-4 w-4 text-neutral-300" />
                </div>
            </div>
        </button>
    );
};

export const HomePage: FC = () => {
    return (
        <PhoneFrame>
            <div className="relative h-full overflow-hidden bg-[#efeff4]">
                <div className="relative h-[240px] overflow-hidden bg-[#5ba0d6]">

                    <div className="absolute left-4 right-4 top-4 z-20 flex items-center justify-between">
                        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white/70 backdrop-blur-md">
                            <div className="grid grid-cols-2 gap-[2px]">
                                <div className="h-1.5 w-1.5 rounded-full bg-black" />
                                <div className="h-1.5 w-1.5 rounded-full bg-black" />
                                <div className="h-1.5 w-1.5 rounded-full bg-black" />
                                <div className="h-1.5 w-1.5 rounded-full bg-black" />
                            </div>
                        </button>

                        <button className="rounded-full bg-white/70 px-3 py-1 text-[13px] backdrop-blur-md">
                            Edit
                        </button>
                    </div>

                    <div className="relative z-10 flex flex-col items-center pt-16">
                        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-yellow-300 shadow-xl">
                            <span className="text-5xl">🦖</span>
                        </div>

                        <h1 className="text-[30px] font-semibold tracking-tight text-white">
                            Dinosaur★
                        </h1>

                        <p className="mt-1 text-[15px] text-white/90">+888 888 888 • @dino</p>
                    </div>

                    <div className="absolute bottom-0 h-24 w-full bg-gradient-to-t from-[#efeff4] to-transparent" />
                </div>

                <div className="absolute inset-x-0 bottom-0 top-[210px] overflow-y-auto px-3 pb-32">
                    <div className="space-y-4">
                        <div className="overflow-hidden rounded-[22px] bg-[#f8f8f8] shadow-sm">
                            <Row
                                icon={<Bell className="h-4 w-4 text-sky-500" />}
                                title="Set Emoji Status"
                            />

                            <Row
                                icon={<User className="h-4 w-4 text-sky-500" />}
                                title="Change Profile Photo"
                            />
                        </div>

                        <div className="overflow-hidden rounded-[22px] bg-[#f8f8f8] shadow-sm">
                            <Row
                                icon={<Plus className="h-5 w-5 text-sky-500" />}
                                title="Add Account"
                            />
                        </div>

                        <div className="overflow-hidden rounded-[22px] bg-[#f8f8f8] shadow-sm">
                            <Row
                                icon={<User className="h-4 w-4 text-red-500" />}
                                title="My Profile"
                            />

                            <Row
                                icon={<Wallet className="h-4 w-4 text-blue-500" />}
                                title="Wallet"
                            />

                            <Row
                                icon={<Bookmark className="h-4 w-4 text-blue-500" />}
                                title="Saved Messages"
                            />

                            <Row
                                icon={<Phone className="h-4 w-4 text-green-500" />}
                                title="Recent Calls"
                            />

                            <Row
                                icon={<Smartphone className="h-4 w-4 text-orange-500" />}
                                title="Devices"
                                value="3"
                            />
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex h-16 items-center justify-around rounded-full border border-white/40 bg-white/80 backdrop-blur-2xl shadow-2xl">
                        {["Contacts", "Calls", "Chats", "Settings"].map((item, i) => (
                            <button
                                key={item}
                                className={`flex flex-col items-center gap-1 text-[11px] ${
                                    i === 3 ? "text-sky-500" : "text-black"
                                }`}
                            >
                                <div className="h-5 w-5 rounded-full bg-current opacity-80" />
                                {item}
                            </button>
                        ))}

                        <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg">
                            🔍
                        </button>
                    </div>
                </div>
            </div>
        </PhoneFrame>
    );
};
