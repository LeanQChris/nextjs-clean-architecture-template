import { inject, injectable } from "inversify";
import { AuthDataSource } from "./source";
import { LoginDTO, LoginResponseDTO } from "@/common/dtos/auth.dtos";

export interface IAuthRepository {
    login(payload: LoginDTO): Promise<LoginResponseDTO>;
}

@injectable()
export class AuthRepository implements IAuthRepository {
    constructor(
        @inject("AuthDataSource") private authDataSource: AuthDataSource
    ) {

    }
    login(payload: LoginDTO): Promise<LoginResponseDTO> {
        return this.authDataSource.login(payload);
    }
}