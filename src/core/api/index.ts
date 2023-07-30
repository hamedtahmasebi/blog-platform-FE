import { GraphQLClient } from 'graphql-request';

export const gqlClient = new GraphQLClient('http://localhost:4000/graphql', {});

export * as User from './gql/user';
export * as Post from './gql/post';
export * as Schema from './gql/schemas';
export * as Operations from './gql/operations';
