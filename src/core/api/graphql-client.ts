import { ApolloClient, InMemoryCache, MutationOptions, QueryOptions } from '@apollo/client';
import { ApiResponse } from './types';

export const gqlClient = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:4000/graphql',
});
export class Api {
    constructor(private apollo: ApolloClient<any>) {}

    async query<TReq, TRes>(options: QueryOptions<{ body: TReq }, TRes>): ApiResponse<TRes> {
        try {
            const res = await this.apollo.query<TRes, { body: TReq }>(options);
            if (res.errors) return { data: null, error: res.errors[0].message };
            if (res.error) return { data: null, error: res.error.message };
            return {
                data: res.data,
                error: null,
            };
        } catch (error: any) {
            return {
                data: null,
                error: error?.message || error,
            };
        }
    }

    async mutate<TReq, TRes>(options: MutationOptions<TRes, { body: TReq }>): ApiResponse<TRes> {
        try {
            const res = await this.apollo.mutate<TRes, { body: TReq }>(options);
            if (res.errors) return { data: null, error: res.errors[0].message };
            if (res.data === undefined || res.data === null) return { data: null, error: 'Something went wrong' };
            return {
                data: res.data,
                error: null,
            };
        } catch (error: any) {
            return {
                data: null,
                error: error?.message || error,
            };
        }
    }
}

export const ApiClient = new Api(gqlClient);
