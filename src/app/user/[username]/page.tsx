'use client';

import { Button } from '@chakra-ui/react';
import { appStore } from '@src/core/store/app';
import { useEffect } from 'react';
import { exampleService } from 'src/core/services/example';
const User = () => {
    const { getCurrentUser } = appStore(); // this rerenders if any of the states change
    useEffect(() => {
        getCurrentUser();
    }, []);

    return (
        <div className="">
            <Button onClick={() => exampleService()}>Call service</Button>
        </div>
    );
};
export default User;
