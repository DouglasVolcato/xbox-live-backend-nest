import { Game } from 'src/domain/entities/game-entity';
import { Profile } from 'src/domain/entities/profile-entity';
import { User } from 'src/domain/entities/user-entity';
import { Repository } from 'src/domain/repositories/repository';
import { GetAllUseCase } from 'src/domain/useCases/getAll-useCase';

export class GetAllUsersUseCase implements GetAllUseCase {
  constructor(private readonly repository: Repository) {}

  async execute(): Promise<Game[] | Profile[] | User[] | []> {
    return await this.repository.getAll();
  }
}
