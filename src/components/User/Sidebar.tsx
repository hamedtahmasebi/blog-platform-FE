import Image from 'next/image';
import { FC } from 'react';

interface Props {
    username: string;
    avatarUrl: string;
    backgroundPictureUrl: string;
}

export const Sidebar: FC<Props> = ({ username, avatarUrl, backgroundPictureUrl }) => {
    return (
        <div className="flex flex-col relative items-center w-full shadow rounded-lg bg-white">
            <div className="h-20 -mx-16 w-full relative">
                <Image
                    className="object-cover rounded-lg rounded-b-none"
                    src={backgroundPictureUrl}
                    alt="avatar"
                    fill
                />
            </div>
            <Image className="rounded-xl -mt-8 z-10" src={avatarUrl} alt="avatar" width={60} height={60} />

            <div className="p-4">
                <h2 className="text-center text-lg font-semibold">{username}</h2>
                <h3 className="text-sm">Web developer</h3>
            </div>
            <hr className="py-2 w-full" />
            <div className="flex flex-col gap-2 p-4">
                <p className="text-xs">Hamed@gmail.com</p>
                <p className="text-xs">@hamedtahmasebi</p>
            </div>
        </div>
    );
};
