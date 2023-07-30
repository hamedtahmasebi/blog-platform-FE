'use client';

import { appStore } from '@src/core/store/app';
import { useEffect } from 'react';

const User = () => {
    const { getCurrentUser, user } = appStore(); // this rerenders if any of the states change
    useEffect(() => {
        getCurrentUser();
    }, []);

    console.log(user);

    return <div className=""></div>;
};
export default User;
