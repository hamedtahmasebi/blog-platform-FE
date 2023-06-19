import { LoginReq, RegisterReq, SuccessLoginRes, User } from '../gql';
import { Api, ApiClient } from '../graphql-client';
import { ApiResponse } from '../types';
import { UserQueries } from './user.queries';
interface UserApiInterface {
    login(body: LoginReq): unknown;
    register(body: RegisterReq): unknown;
    getCurrentUser(): ApiResponse<User>;
}

export class UserApi implements UserApiInterface {
    constructor(private api: Api) {}

    async login(body: LoginReq) {
        const res = await this.api.mutate<LoginReq, SuccessLoginRes>({
            mutation: UserQueries.login,
            variables: {
                body,
            },
        });
        return res;
    }

    async register(body: RegisterReq) {
        const res = await this.api.mutate<RegisterReq, SuccessLoginRes>({
            mutation: UserQueries.register,
            variables: {
                body,
            },
        });
        return res;
    }

    async getCurrentUser() {
        const res = await this.api.query<null, User>({
            query: UserQueries.currentUser,
        });
        return res;
    }
}

export const userApi = new UserApi(ApiClient);
export default userApi;
