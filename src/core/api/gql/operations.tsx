import * as Types from './types';

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
