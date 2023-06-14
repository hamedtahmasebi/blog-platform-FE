import { LoginReq, RegisterReq } from '../gql';
import { Api, ApiClient } from '../graphql-client';
import { ApiResponse } from '../types';
import { UserQueries } from './user.queries';
interface UserApiInterface {
    login(body: LoginReq): ApiResponse;
    register(body: RegisterReq): ApiResponse;
}

export class UserApi implements UserApiInterface {
    constructor(private api: Api) {}

    async login(body: LoginReq): ApiResponse {
        const res = await this.api.mutate({
            mutation: UserQueries.login,
            variables: {
                body,
            },
        });

        return res;
    }

    async register(body: RegisterReq): ApiResponse {
        const res = await this.api.mutate({
            mutation: UserQueries.register,
            variables: {
                body,
            },
        });
        return res;
    }

    async getCurrentUser(): ApiResponse {
        const res = await this.api.query({
            query: UserQueries.currentUser,
        });
        return res;
    }
}

export const userApi = new UserApi(ApiClient);
export default userApi;
