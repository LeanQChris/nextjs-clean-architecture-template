"use client"
import React from 'react';
import useLogin from '../hook/useLogin';
import { Input } from '@/common/components/ui/input';
import { Label } from '@/common/components/ui/label';
import { Button } from '@/common/components/ui/button';

const LoginForm: React.FC = () => {
    const { register, handleSubmit, errors } = useLogin();

    return (
        <form className='w-[400px] space-y-4' onSubmit={handleSubmit}>
            <div className='space-y-2'>
                <Label>Username</Label>
                <Input type="text" {...register('username')} />
                {errors.username && <p>{errors.username.message}</p>}
            </div>

            <div className='space-y-2'>
                <Label>Password</Label>
                <Input type="password" {...register('password')} />
                {errors.password && <p>{errors.password.message}</p>}
            </div>
            <Button className='w-full' type="submit">Login</Button>
        </form>
    );
};

export default LoginForm;
