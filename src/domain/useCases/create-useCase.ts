import { Game } from '../entities/game-entity';
import { Profile } from '../entities/profile-entity';
import { User } from '../entities/user-entity';

export interface CreateUseCase {
  execute(body: Game | Profile | User): Promise<boolean>;
}
