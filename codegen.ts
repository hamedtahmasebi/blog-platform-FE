import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: 'http://localhost:4000/graphql',
    documents: 'src/**/*.graphql',
    generates: {
        'src/core/api/gql/raw.graphql': {
            plugins: ['schema-ast'],
        },

        'src/core/api/gql/types.tsx': {
            overwrite: true,
            plugins: ['typescript'],
        },
        'src/core/api/gql/operations.tsx': {
            preset: 'import-types',
            presetConfig: {
                typesPath: './types',
            },
            overwrite: true,
            // preset: "client",
            plugins: ['typescript-operations'],
        },
        'src/core/api/gql/hooks.tsx': {
            preset: 'import-types',
            presetConfig: {
                typesPath: './operations',
            },
            overwrite: true,
            plugins: ['typescript-react-query'],
            config: {
                fetcher: 'graphql-request',
                addInfiniteQuery: true,
                withHOC: false,
                withComponent: false,
                withHooks: true,
            },
        },
    },
};

export default config;
