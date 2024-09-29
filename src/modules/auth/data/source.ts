import "reflect-metadata";
import { injectable } from "inversify";
import { LoginDTO, LoginResponseDTO } from "@/common/dtos/auth.dtos";
import httpClient from "@/core/http/client";

export interface IAuthDataSource {
    login: (payload: LoginDTO) => Promise<LoginResponseDTO>;
}

@injectable()
export class AuthDataSource implements IAuthDataSource {
    login = (payload: LoginDTO): Promise<LoginResponseDTO> => {
        return httpClient.post("/auth/login", { payload })
    }
}