import { appStore } from '../store/app';

export const exampleService = () => {
    let { user } = appStore.getState();
    console.log(user);
    appStore.setState({ user: null });

    let state = appStore.getState();

    console.log(state.user);
};
