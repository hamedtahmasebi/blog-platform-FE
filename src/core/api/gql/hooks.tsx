import * as Types from './operations';

import { GraphQLClient } from 'graphql-request';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request({
    document: query,
    variables,
    requestHeaders
  });
}

export const LoginDocument = `
    mutation Login($body: LoginReq!) {
  login(body: $body)
}
    `;
export const useLoginMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<Types.LoginMutation, TError, Types.LoginMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<Types.LoginMutation, TError, Types.LoginMutationVariables, TContext>(
      ['Login'],
      (variables?: Types.LoginMutationVariables) => fetcher<Types.LoginMutation, Types.LoginMutationVariables>(client, LoginDocument, variables, headers)(),
      options
    );