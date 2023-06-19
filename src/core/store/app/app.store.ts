import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { User } from '@src/core/api/gql';
import { userApi } from '@src/core/api/User';

type State = {
    user: User | null;
};

type Actions = {
    getCurrentUser(): void;
};

export const appStore = create(
    immer<State & Actions>((set) => ({
        user: null,
        getCurrentUser,
    }))
);

const setState = appStore.setState;

async function getCurrentUser() {
    console.log('Fetching current user');
    const res = await userApi.getCurrentUser();
    console.log(res);
    setState({
        user: res.data,
    });
}
