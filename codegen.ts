import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    debug: true,
    verbose: true,
    schema: 'http://localhost:4000/graphql',
    generates: {
        'src/core/api/gql/schemas.ts': {
            plugins: ['typescript'],
        },
        'src/core/api/gql/operations.ts': {
            documents: 'src/core/api/queries/*.graphql',
            preset: 'import-types',
            presetConfig: {
                typesPath: './schemas',
            },
            plugins: ['typescript-operations'],
        },
        'src/core/api/gql/user.ts': {
            preset: 'import-types',
            presetConfig: {
                typesPath: './operations',
            },
            documents: 'src/core/api/queries/user.graphql',
            plugins: ['typescript-graphql-request'],
        },
        'src/core/api/gql/post.ts': {
            preset: 'import-types',
            presetConfig: {
                typesPath: './operations',
            },

            documents: 'src/core/api/queries/post.graphql',

            plugins: ['typescript-graphql-request'],
        },
    },
};

export default config;
