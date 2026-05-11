import {User, Phone, MessageCircle, Settings, Search} from "lucide-react";

export const BottomTabs = () => {
    return (
        <div className="absolute bottom-0 left-0 right-0 border-t border-zinc-200 bg-white/80 backdrop-blur-xl">
            <div className="flex items-center justify-around py-3">
                <User />

                <Phone />

                <MessageCircle />

                <Settings className="text-blue-500" />

                <Search />
            </div>
        </div>
    );
};
