import "reflect-metadata";
import { injectable } from "inversify";
import httpClient from "@/core/http/client";
import { LoginDTO, LoginResponseDTO } from "@/common/dtos/auth.dtos";

export interface IAuthDataSource {
    login: (payload: LoginDTO) => Promise<LoginResponseDTO>;
}

@injectable()
export class AuthDataSource implements IAuthDataSource {
    login = (payload: LoginDTO): Promise<LoginResponseDTO> => {
        return httpClient.post("/auth/login", { payload })
    }
}