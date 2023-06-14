import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: 'http://localhost:4000/graphql',
    documents: 'src/core/api/**/*.queries.ts',
    generates: {
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
    },
};

export default config;
