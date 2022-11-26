import { UserDto } from 'src/domain/dtos/user-dto';
import { UserRepositoryInterface } from 'src/infra/repositories/abstract/user-repository-interface';
import { UpdateUserUseCaseInterface } from 'src/data/abstract/user/update-user-interface';
import { InvalidParamError } from 'src/utils/errors';
import { UserEntity } from 'src/entities/user-entity';

export class UpdateUserUseCase implements UpdateUserUseCaseInterface {
  constructor(private readonly repository: UserRepositoryInterface) {}

  async execute(body: UserDto, id: string): Promise<boolean> {
    const foundUser = await this.repository.getOneById(id);

    if (foundUser) {
      const updatedBody = new UserEntity(Object.assign(foundUser, body));
      const updatedUser = await this.repository.update(
        updatedBody.getBody(),
        id,
      );

      if (updatedUser) {
        return true;
      } else {
        return false;
      }
    } else {
      throw new InvalidParamError('ID');
    }
  }
}
