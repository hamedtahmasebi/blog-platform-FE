import { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex justify-center items-center h-screen w-screen bg-white">
            <div className="w-full lg:w-1/2 xl:w-1/3 h-full md:h-auto min-h-[50vh]">{children}</div>
        </div>
    );
}
