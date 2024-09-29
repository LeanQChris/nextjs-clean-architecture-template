import "reflect-metadata"

import { inject, injectable } from "inversify";
import { AuthRepository } from "../data/repository";
import { LoginDTO, LoginResponseDTO } from "@/common/dtos/auth.dtos";

export interface IAuthUsecase {
    login(payload: LoginDTO): Promise<LoginResponseDTO>;
}

@injectable()
export class AuthUsecase implements IAuthUsecase {
    constructor(
        @inject("AuthRepository") private authRepository: AuthRepository
    ) {

    }
    login(payload: LoginDTO): Promise<LoginResponseDTO> {
        return this.authRepository.login(payload);
    }
}