'use client';
import { userApi } from '@src/core/api/User';
import { FormEvent } from 'react';

const Login = () => {
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const res = await userApi.login({
            email: 'test@gmail.com',
            password: 'test',
        });
        console.log(res.data);
    };
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <label>
                <div>Email</div>
                <input type="email" />
            </label>
            <label>
                <div>Password</div>
                <input type="password" />
            </label>
            <button type="submit" className="btn btn-lg">
                Login
            </button>
        </form>
    );
};

export default Login;
