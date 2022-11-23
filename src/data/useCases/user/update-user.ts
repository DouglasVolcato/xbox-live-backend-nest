import { UserDto } from 'src/domain/dtos/user-dto';
import { Repository } from 'src/domain/repositories/repository';
import { UpdateUseCase } from 'src/domain/useCases/update-useCase';

export class UpdateUserUseCase implements UpdateUseCase {
  constructor(private readonly repository: Repository) {}

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
