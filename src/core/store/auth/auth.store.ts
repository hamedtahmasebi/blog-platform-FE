import { toast } from 'react-toastify';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { User, gqlClient, Schema } from 'src/core/api';
// TODO: Add object schema validation using yup
// TODO: Add a better error handling

type State = {};

type Actions = {
    register(args: Schema.RegisterReq): void;
    // login(args: { email: string; password: string }): void;
};

const UserApi = User.getSdk(gqlClient);

export const AuthStore = create(
    immer<State & Actions>((set) => ({
        async register(args) {
            try {
                const user = await UserApi.Register({
                    body: args,
                });
                localStorage.setItem('auth_token', user.register.authToken);
                toast.success('Logged in successfully!');
            } catch (error: any) {
                if ('message' in error) {
                    toast.error(error.message);
                    return;
                }

                toast.error('Something went wrong!');
            }
        },

        // async login(args) {
        //     const { data, error } = await userApi.login(args);
        //     if (error) return toast.error(error);
        //     if (!data?.authToken) return toast.error('Something went wrong!');
        //     localStorage.setItem('auth_token', data.authToken);
        // },
    }))
);
