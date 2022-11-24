import { LoginUserUseCaseInterface } from 'src/data/abstract/user/login-user-interface';
import { LoginDto } from 'src/domain/dtos/login-dto';
import { UserRepositoryInterface } from 'src/infra/repositories/abstract/user-repository-interface';

export class LoginUserUseCase implements LoginUserUseCaseInterface {
  constructor(private readonly repository: UserRepositoryInterface) {}

  async execute(body: LoginDto): Promise<boolean> {
    const foundUser = await this.repository.getOneByEmail(body.email);
    if (foundUser) {
        
    } else {
      return false;
    }
  }
}
