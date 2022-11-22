import { Game } from '../entities/game-entity';
import { Profile } from '../entities/profile-entity';
import { User } from '../entities/user-entity';

export interface GetOneUseCase {
  execute(id: string): Promise<Game | Profile | User>;
}
