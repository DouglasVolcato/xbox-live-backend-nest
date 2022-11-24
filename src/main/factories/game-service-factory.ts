import { CreateGameUseCase } from 'src/data/useCases/game/create-game-usecase';
import { DeleteGameUseCase } from 'src/data/useCases/game/delete-game-usecase';
import { GetAllGamesUseCase } from 'src/data/useCases/game/getAll-game-usecase';
import { GetOneGameUseCase } from 'src/data/useCases/game/getOne-game-usecase';
import { UpdateGameUseCase } from 'src/data/useCases/game/update-game-usecase';
import { GameRepository } from 'src/infra/repositories/game-repository';

export function makeGameServiceFactory() {
  const repository = new GameRepository();

  const createGameUseCase = new CreateGameUseCase(repository);
  const getOneGameUseCase = new GetOneGameUseCase(repository);
  const getAllGamesUseCase = new GetAllGamesUseCase(repository);
  const updateGameUseCase = new UpdateGameUseCase(repository);
  const deleteGameUseCase = new DeleteGameUseCase(repository);

  return {
    createGameUseCase,
    getOneGameUseCase,
    getAllGamesUseCase,
    updateGameUseCase,
    deleteGameUseCase,
  };
}
