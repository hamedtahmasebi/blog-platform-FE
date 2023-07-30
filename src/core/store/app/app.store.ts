import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { Operations, User, gqlClient } from 'src/core/api';

type State = {
    error: string | null;
    user: Operations.CurrentUserQuery['currentUser'] | null;
};

type Actions = {
    getCurrentUser(): void;
};

export const appStore = create(
    immer<State & Actions>(() => ({
        user: null,
        error: null,
        getCurrentUser,
    }))
);

const setState = appStore.setState;

const UserApi = User.getSdk(gqlClient);

async function getCurrentUser() {
    try {
        gqlClient.setHeader('authorization', localStorage.getItem('auth_token') || '');
        const res = await UserApi.CurrentUser();
        console.log(res);
        setState({
            user: res.currentUser,
        });
    } catch (error: any) {
        if ('message' in error && typeof error.message === 'string')
            return setState({
                error: error.message,
            });
        return setState({
            error: 'Something went wrong!',
        });
    }
}
