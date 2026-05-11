import {Avatar, AvatarFallback} from "@/components/ui/avatar";

export const ProfileHeader = () => {
    return (
        <div className="rounded-3xl bg-white p-4">
            <div className="flex items-center gap-3">
                <Avatar className="h-14 w-14">
                    <AvatarFallback>D</AvatarFallback>
                </Avatar>

                <div>
                    <h2 className="font-semibold text-lg">Dinosaur</h2>

                    <p className="text-sm text-zinc-500">@dino</p>
                </div>
            </div>
        </div>
    );
};
