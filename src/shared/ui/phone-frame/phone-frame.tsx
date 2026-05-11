import type {FC, ReactNode} from "react";

type Props = {
    children: ReactNode;
};

export const PhoneFrame: FC<Props> = ({children}) => {
    return (
        <div className="min-h-screen bg-zinc-200 flex items-center justify-center p-6">
            <div className="relative h-[720px] w-[390px] overflow-hidden rounded-[48px] bg-zinc-100 shadow-2xl">
                {children}
            </div>
        </div>
    );
};
