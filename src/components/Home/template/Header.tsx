'use client';

import { Button } from '@chakra-ui/react';

export const Header = () => {
    return (
        <nav className="flex justify-between py-2 px-4 w-full shadow-lg fixed top-0">
            <h1 className="text-5xl font-bold">Muse</h1>
            <div className="grid grid-cols-2 gap-2">
                <Button variant={'solid'} colorScheme="primary">
                    Login
                </Button>
                <Button>Start writing</Button>
            </div>
        </nav>
    );
};
