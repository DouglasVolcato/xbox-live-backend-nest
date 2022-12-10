import { UserDto } from '../../../domain/dtos/user-dto';
import { UserRepositoryInterface } from '../../../infra/repositories/abstract/user-repository-interface';
import { CreateUserUseCaseInterface } from '../../../data/abstract/user/create-user-interface';
import { UserEntity } from '../../../entities/user-entity';

export class CreateUserUseCase implements CreateUserUseCaseInterface {
  constructor(private readonly repository: UserRepositoryInterface) {}

  async execute(body: UserDto): Promise<boolean> {
    const userBody = new UserEntity(body);
    userBody.validateBody();
    const newUser = userBody.getBody();

    const createdUser = await this.repository.create(newUser);
    if (createdUser) {
      return true;
    } else {
      return false;
    }
  }
}
