import { GameEntityInterface } from 'src/domain/entities/game-entity-interface';
import { GameRepositoryInterface } from 'src/infra/repositories/abstract/game-repository-interface';
import { arrGames } from '../database/mocked';

export class GameRepository implements GameRepositoryInterface {
  create(body: GameEntityInterface): Promise<GameEntityInterface> {
    return new Promise((resolve) => {
      arrGames.push(body);
      resolve(body);
    });
  }
  getOne(id: string): Promise<void | GameEntityInterface> {
    return new Promise((resolve) => {
      const foundGame = arrGames.find((game) => game.id === id);
      resolve(foundGame);
    });
  }
  getAll(): Promise<GameEntityInterface[] | []> {
    return new Promise((resolve) => resolve(arrGames));
  }
  update(
    body: GameEntityInterface,
    id: string,
  ): Promise<void | GameEntityInterface> {
    return new Promise((resolve) => {
      for (let index = 0; index < arrGames.length; index++) {
        if (arrGames[index].id === id) {
          arrGames.splice(index, 1, body);
          break;
        }
      }
      resolve(body);
    });
  }
  delete(id: string): Promise<void | GameEntityInterface> {
    return new Promise((resolve) => {
      for (let index = 0; index < arrGames.length; index++) {
        if (arrGames[index].id == id) {
          const deletedItem = arrGames.splice(index, 1);
          resolve(deletedItem[0]);
        }
      }
    });
  }
}
