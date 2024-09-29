import { AuthRepository, IAuthRepository } from "@/modules/auth/data/repository";
import { AuthDataSource, IAuthDataSource } from "@/modules/auth/data/source";
import { AuthUsecase, IAuthUsecase } from "@/modules/auth/domain/usecase";
import { Container } from "inversify";

const appContainer = new Container({
    defaultScope: "Singleton",
});

appContainer.bind<IAuthDataSource>("AuthDataSource").to(AuthDataSource);
appContainer.bind<IAuthRepository>("AuthRepository").to(AuthRepository);
appContainer.bind<IAuthUsecase>("AuthUsecase").to(AuthUsecase);

function getIt<T>(identifier: string): T {
    return appContainer.get<T>(identifier);
}

export { appContainer, getIt }

