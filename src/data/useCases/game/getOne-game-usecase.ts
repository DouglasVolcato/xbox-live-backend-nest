import { GameEntityInterface } from 'src/domain/entities/game-entity-interface';
import { GetOneGameUseCaseInterface } from 'src/data/abstract/game/getOne-game-interface';
import { GameRepositoryInterface } from 'src/infra/repositories/abstract/game-repository-interface';

export class GetOneGameUseCase implements GetOneGameUseCaseInterface {
  constructor(private readonly repository: GameRepositoryInterface) {}

  async execute(id: string): Promise<GameEntityInterface | void> {
    return await this.repository.getOne(id);
  }
}
