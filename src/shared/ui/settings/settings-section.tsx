import type {FC, ReactNode} from "react";

type Props = {
    children: ReactNode;
};

export const SettingsSection: FC<Props> = ({children}) => {
    return <div className="rounded-3xl bg-white px-4">{children}</div>;
};
