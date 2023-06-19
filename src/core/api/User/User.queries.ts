import { gql } from '@apollo/client';

const login = gql`
    mutation Login($body: LoginReq!) {
        login(body: $body) {
            authToken
        }
    }
`;

const register = gql`
    mutation Register($body: RegisterReq!) {
        register(body: $body) {
            authToken
        }
    }
`;

const currentUser = gql`
    query CurrentUser {
        currentUser {
            email
            token
        }
    }
`;

export const UserQueries = {
    login,
    register,
    currentUser,
};
