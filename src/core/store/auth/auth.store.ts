import { userApi } from '@src/core/api/User';
import { toast } from 'react-toastify';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

// TODO: Add object schema validation using yup
// TODO: Add a better error handling

type State = {};

type Actions = {
    register(args: { email: string; password: string; confirmPassword: string }): void;
    login(args: { email: string; password: string }): void;
};

export const AuthStore = create(
    immer<State & Actions>((set) => ({
        async register(args) {
            const { data, error } = await userApi.register(args);
            if (error) return toast.error(error);
            if (!data?.authToken) return toast.error('Something went wrong!');
            localStorage.setItem('auth_token', data.authToken);
            toast.success('Logged in successfully!');
        },

        async login(args) {
            const { data, error } = await userApi.login(args);
            if (error) return toast.error(error);
            if (!data?.authToken) return toast.error('Something went wrong!');
            localStorage.setItem('auth_token', data.authToken);
        },
    }))
);

const setState = AuthStore.setState;
