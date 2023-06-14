import { LoginReq } from '../gql';
import { Api } from '../graphql-client';
import { ApiResponse } from '../types';
import { UserQueries } from './User.queries';
interface UserApiInterface {
    login(body: LoginReq): ApiResponse;
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
        console.log(res);
        return {
            data: res,
            error: null,
        };
    }
}
