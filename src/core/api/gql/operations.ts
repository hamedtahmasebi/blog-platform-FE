import * as Types from './schemas';

export type PostsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type PostsQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', content: any, created: any, title: string, token: string, user: { __typename?: 'User', token: string } }> };

export type AddPostMutationVariables = Types.Exact<{
  body: Types.AddPostReq;
}>;


export type AddPostMutation = { __typename?: 'Mutation', addPost: { __typename?: 'Post', content: any, created: any, title: string, token: string, updated: any, user: { __typename?: 'User', email: string, token: string } } };

export type LoginMutationVariables = Types.Exact<{
  body: Types.LoginReq;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'SuccessLoginRes', authToken: string } };

export type RegisterMutationVariables = Types.Exact<{
  body: Types.RegisterReq;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'SuccessLoginRes', authToken: string } };

export type CurrentUserQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Query', currentUser: { __typename?: 'User', email: string, token: string } };
