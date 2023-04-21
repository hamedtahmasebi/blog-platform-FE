import { theme } from '@src/core/styles/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider } from 'antd';
import { ReactNode } from 'react';

const queryClient = new QueryClient();

export const ClientProviders = ({ children }: { children: ReactNode }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <ConfigProvider theme={theme}>{children}</ConfigProvider>
        </QueryClientProvider>
    );
};
