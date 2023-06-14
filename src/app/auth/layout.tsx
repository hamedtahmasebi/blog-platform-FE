'use client';
import { appStore } from '@src/core/store/app';
import { ReactNode, useEffect } from 'react';
import { shallow } from 'zustand/shallow';
export default function AuthLayout({ children }: { children: ReactNode }) {
    const { currentUser, getCurrentUser } = appStore(
        (store) => ({
            currentUser: store.user,
            getCurrentUser: store.getCurrentUser,
        }),
        shallow
    );

    useEffect(() => {
        getCurrentUser();
    }, []);

    return (
        <div className="flex justify-center items-center h-screen w-screen bg-white">
            <div className="w-full lg:w-1/2 xl:w-1/3 h-full md:h-auto min-h-[50vh]">{children}</div>
        </div>
    );
}
