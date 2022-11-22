import { Game } from 'src/domain/entities/game-entity';
import { Repository } from 'src/domain/repositories/repository';
import { arrGames } from '../database/mocked';

export class GameRepository implements Repository {
  create(body: Game): Promise<Game> {
    return new Promise((resolve) => {
      arrGames.push(body);
      resolve(body);
    });
  }

  getOne(id: string): Promise<Game> {
    return new Promise((resolve) => {
      const foundGame = arrGames.find((game) => game.id === id);
      resolve(foundGame);
    });
  }

  getAll(): Promise<Game[]> {
    return new Promise((resolve) => resolve(arrGames));
  }

  update(body: Game, id: string): Promise<Game> {
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

  delete(id: string): Promise<Game> {
    return new Promise((resolve) => {
      for (let index = 0; index < arrGames.length; index++) {
        if (arrGames[index].id === id) {
          arrGames.splice(index, 1);
          resolve(arrGames[index]);
        }
      }
    });
  }
}
