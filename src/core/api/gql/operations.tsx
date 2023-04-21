import * as Types from './types';

export type LoginMutationVariables = Types.Exact<{
  body: Types.LoginReq;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: boolean };
