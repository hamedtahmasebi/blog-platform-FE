'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

import { extendTheme } from '@chakra-ui/react';
const colors = {
    primary: {
        50: '#baccf5',
        100: '#a9bff3',
        200: '#98b2f1',
        300: '#7599ec',
        400: '#648ce9',
        500: '#537FE7',
        600: '#1f57dc',
        700: '#1741a5',
        800: '#0f2c6e',
        900: '#0c2153',
    },
};

export const theme = extendTheme({ colors });

export const Providers: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <CacheProvider>
            <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </CacheProvider>
    );
};
