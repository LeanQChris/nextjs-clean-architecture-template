import { FieldErrors, useForm, UseFormRegister } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';

import { getIt } from "@/core/di/container"

import { IAuthUsecase } from "@/modules/auth/domain/usecase"

import { LoginDTO } from "@/common/dtos/auth.dtos";

const schema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
});

interface IuseLogin {
    register: UseFormRegister<LoginDTO>;
    handleSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
    errors: FieldErrors<LoginDTO>;
}

export default function useLogin(): IuseLogin {
    const authUsecase = getIt<IAuthUsecase>("AuthUsecase")

    const { register, handleSubmit, formState: { errors } } = useForm<LoginDTO>({
        resolver: yupResolver(schema),
    });

    const login = async (payload: LoginDTO) => {
        try {
            const response = await authUsecase.login(payload)
            return response.token
        } catch (error) {
            console.error(error)
        }
    }

    const onSubmit = (data: LoginDTO) => {
        login(data);
    };

    return { register, handleSubmit: handleSubmit(onSubmit), errors };
}   