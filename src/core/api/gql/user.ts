import * as Types from './operations';

import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';

export const LoginDocument = gql`
    mutation Login($body: LoginReq!) {
  login(body: $body) {
    authToken
  }
}
    `;
export const RegisterDocument = gql`
    mutation Register($body: RegisterReq!) {
  register(body: $body) {
    authToken
  }
}
    `;
export const CurrentUserDocument = gql`
    query CurrentUser {
  currentUser {
    email
    token
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Login(variables: Types.LoginMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.LoginMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.LoginMutation>(LoginDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Login', 'mutation');
    },
    Register(variables: Types.RegisterMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.RegisterMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.RegisterMutation>(RegisterDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Register', 'mutation');
    },
    CurrentUser(variables?: Types.CurrentUserQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.CurrentUserQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.CurrentUserQuery>(CurrentUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CurrentUser', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;