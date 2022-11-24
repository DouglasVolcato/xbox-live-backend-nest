import { LoginAuthUseCase } from 'src/data/useCases/auth/login-user-usecase';
import { UserRepository } from 'src/infra/repositories/user-repository';
import { AuthControllerInterface } from 'src/presentation/abstract/controllers/auth-controller-interface';
import { AuthController } from 'src/presentation/controllers/auth/auth-controller';

export function makeAuthControllerFactory(): AuthControllerInterface {
  const authRepository = new UserRepository();

  const loginAuthUseCase = new LoginAuthUseCase(authRepository);

  const authController = new AuthController(loginAuthUseCase);

  return authController;
}
