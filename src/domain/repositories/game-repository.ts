import { GameDto } from '../dtos/game-dto';
import { Game } from '../entities/game';

export interface GameRepository {
  create(gameBody: Game): Promise<Game>;
  getOne(gameId: string): Promise<Game>;
  getAll(): Promise<Game[]>;
  update(gameBody: GameDto): Promise<Game>;
  delete(gameId: string): Promise<Game>;
}
