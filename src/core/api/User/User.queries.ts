import { gql } from '@apollo/client';

const login = gql`
    mutation Login($body: LoginReq!) {
        login(body: $body)
    }
`;

const register = gql`
    mutation Register($body: RegisterReq!) {
        register(body: $body)
    }
`;

export const UserQueries = {
    login,
    register,
};
