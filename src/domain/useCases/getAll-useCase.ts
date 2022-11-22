import { Game } from '../entities/game-entity';
import { Profile } from '../entities/profile-entity';
import { User } from '../entities/user-entity';

export interface GetAllUseCase {
  execute(): Promise<Game[] | Profile[] | User[] | []>;
}
