import { LoginAuthUseCaseInterface } from 'src/data/abstract/auth/login-auth-interface';
import { LoginDto } from 'src/domain/dtos/login-dto';
import { UserRepositoryInterface } from 'src/infra/repositories/abstract/user-repository-interface';
import { HasherAdapter } from 'src/utils/adapters/hasher-adapter';
import { TokenHandlerAdapter } from 'src/utils/adapters/token-handler-adapter';
import { InvalidParamError } from 'src/utils/errors';

export class LoginAuthUseCase implements LoginAuthUseCaseInterface {
  constructor(private readonly repository: UserRepositoryInterface) {}

  async execute(body: LoginDto): Promise<string | null> {
    const foundUser = await this.repository.getOneByEmail(body.email);
    if (foundUser) {
      const comparison = new HasherAdapter().compare(
        body.password,
        foundUser.password,
      );

      if (comparison) {
        const tokenHandler = new TokenHandlerAdapter();
        const token = tokenHandler.generateToken(foundUser.id);
        return token;
      } else {
        throw new InvalidParamError('Password');
      }
    } else {
      throw new InvalidParamError('Email');
    }
  }
}
