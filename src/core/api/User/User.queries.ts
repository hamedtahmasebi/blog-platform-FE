import { gql } from '@apollo/client';

const login = gql`
    mutation Login($body: LoginReq!) {
        login(body: $body)
    }
`;

export const UserQueries = {
    login,
};
