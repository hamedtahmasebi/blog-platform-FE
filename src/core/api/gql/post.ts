import * as Types from './operations';

import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';

export const PostsDocument = gql`
    query Posts {
  posts {
    content
    created
    title
    token
    user {
      token
    }
  }
}
    `;
export const AddPostDocument = gql`
    mutation AddPost($body: AddPostReq!) {
  addPost(body: $body) {
    content
    created
    title
    token
    updated
    user {
      email
      token
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Posts(variables?: Types.PostsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.PostsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.PostsQuery>(PostsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Posts', 'query');
    },
    AddPost(variables: Types.AddPostMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.AddPostMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.AddPostMutation>(AddPostDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AddPost', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;