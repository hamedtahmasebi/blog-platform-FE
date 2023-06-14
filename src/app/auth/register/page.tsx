'use client';

import { userApi } from '@src/core/api/User';
import { FormEvent } from 'react';

const page = () => {
    const handleRegister = (e: FormEvent) => {
        e.preventDefault();
        userApi.register({
            email: 'test@gmail.com',
            password: 'password',
            confirmPassword: 'password',
        });
    };

    return (
        <form className="flex flex-col gap-3" onSubmit={handleRegister}>
            <h3>Register</h3>
            <label>
                <div>Email</div>
                <input type="email" />
            </label>
            <label>
                <div>Password</div>
                <input type="password" />
            </label>
            <label>
                <div>Confirm Password</div>
                <input type="password" />
            </label>
            <button type="submit" className="btn btn-lg">
                Register
            </button>
        </form>
    );
};

export default page;
