"use client"
import React from 'react';
import useLogin from '../hook/useLogin';

const LoginForm: React.FC = () => {
    const { register, handleSubmit, errors } = useLogin();

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username</label>
                <input type="text" {...register('username')} />
                {errors.username && <p>{errors.username.message}</p>}
            </div>

            <div>
                <label>Password</label>
                <input type="password" {...register('password')} />
                {errors.password && <p>{errors.password.message}</p>}
            </div>

            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;
