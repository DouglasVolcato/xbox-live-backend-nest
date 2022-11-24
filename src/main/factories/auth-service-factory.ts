import { LoginAuthUseCase } from 'src/data/useCases/auth/login-user-usecase';
import { UserRepository } from 'src/infra/repositories/user-repository';

export function makeAuthServiceFactory() {
  const repository = new UserRepository();
  const loginAuthUseCase = new LoginAuthUseCase(repository);

  return { loginAuthUseCase };
}
