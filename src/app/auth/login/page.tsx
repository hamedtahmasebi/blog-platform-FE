'use client';
import { userApi } from '@src/core/api/User';
import { FormEventHandler } from 'react';

const Login = () => {
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const email = formData.get('email')?.toString();
        const password = formData.get('password')?.toString();
        console.log({
            email,
            password,
        });
        if (!email || !password) return;
        const res = await userApi.login({
            email,
            password,
        });
        console.log(res.data);
    };
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <label>
                <div>Email</div>
                <input name="email" type="email" />
            </label>
            <label>
                <div>Password</div>
                <input name="password" type="password" />
            </label>
            <button type="submit" className="btn btn-lg">
                Login
            </button>
        </form>
    );
};

export default Login;
