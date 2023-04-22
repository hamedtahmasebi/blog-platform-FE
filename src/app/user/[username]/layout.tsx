import { Sidebar } from '@src/components/User/Sidebar';
import { ReactNode } from 'react';

const layout = ({ children, params }: { children: ReactNode; params: { username: string } }) => {
    return (
        <div className="flex h-full w-full justify-center items-center lg:w-11/12 mt-8">
            <div className="grid grid-cols-12 w-full lg:w-10/12">
                <div className="col-span-3">
                    <Sidebar
                        username={params.username}
                        avatarUrl={'/images/empty-avatar.jpg'}
                        backgroundPictureUrl="/images/user-card-bg.jpg"
                    />
                </div>
                <div>{children}</div>
            </div>
        </div>
    );
};
export default layout;
