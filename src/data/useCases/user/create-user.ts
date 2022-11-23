import { UserDto } from 'src/domain/dtos/user-dto';
import { Repository } from 'src/domain/repositories/repository';
import { CreateUseCase } from 'src/domain/useCases/create-useCase';
import { UserEntity } from 'src/entities/user-entity';

export class CreateUserUseCase implements CreateUseCase {
  constructor(private readonly repository: Repository) {}

  async execute(body: UserDto): Promise<boolean> {
    const userBody = new UserEntity(body);
    userBody.validateBody();

    const createdUser = await this.repository.create(userBody.getBody());
    switch (createdUser) {
      case createdUser:
        return true;
      default:
        return false;
    }
  }
}
