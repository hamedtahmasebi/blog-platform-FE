'use client';
import { ClientProviders } from '@src/components/ClientProviders';
import { ReactNode } from 'react';

function layout({ children }: { children: ReactNode }) {
    return (
        <ClientProviders>
            <div className="flex flex-col h-screen justify-center items-center ">
                <div className="flex flex-col lg:flex-row w-full h-full lg:w-2/3 lg:h-2/3 xl:w-1/2 xl:h-1/2 bg-white rounded">
                    <div className="w-full lg:w-1/2 p-4">{children}</div>
                    <div className="bg-primary w-full lg:w-1/2 rounded"></div>
                </div>
            </div>
        </ClientProviders>
    );
}
export default layout;
