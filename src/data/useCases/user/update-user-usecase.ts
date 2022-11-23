import { UserDto } from 'src/domain/dtos/user-dto';
import { UserRepositoryInterface } from 'src/infra/repositories/abstract/user-repository-interface';
import { UpdateUserUseCaseInterface } from 'src/data/abstract/user/update-user-interface';

export class UpdateUserUseCase implements UpdateUserUseCaseInterface {
  constructor(private readonly repository: UserRepositoryInterface) {}

  async execute(body: UserDto, id: string): Promise<boolean> {
    const foundUser = await this.repository.getOne(id);
    if (foundUser) {
      const updatedBody = Object.assign(foundUser, body);
      const updatedUser = await this.repository.update(updatedBody, id);
      switch (updatedUser) {
        case updatedUser:
          return true;
        default:
          return false;
      }
    } else {
      return false;
    }
  }
}
