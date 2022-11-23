import { CreateGameUseCaseInterface } from 'src/data/abstract/game/create-game-interface';
import { GameRepositoryInterface } from 'src/infra/repositories/abstract/game-repository-interface';
import { GameDto } from 'src/domain/dtos/game-dto';
import { GameEntity } from 'src/entities/game-entity';

export class CreateGameUseCase implements CreateGameUseCaseInterface {
  constructor(private readonly repository: GameRepositoryInterface) {}

  async execute(body: GameDto): Promise<boolean> {
    const gameBody = new GameEntity(body);
    gameBody.validateBody();

    const createdGame = await this.repository.create(gameBody.getBody());
    switch (createdGame) {
      case createdGame:
        return true;
      default:
        return false;
    }
  }
}
