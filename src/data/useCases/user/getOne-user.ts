import { Game } from 'src/domain/entities/game-entity';
import { Profile } from 'src/domain/entities/profile-entity';
import { User } from 'src/domain/entities/user-entity';
import { Repository } from 'src/domain/repositories/repository';
import { GetOneUseCase } from 'src/domain/useCases/getOne-useCase';

export class GetOneUserUseCase implements GetOneUseCase {
  constructor(private readonly repository: Repository) {}

  async execute(id: string): Promise<Game | Profile | User | void> {
    return await this.repository.getOne(id);
  }
}
