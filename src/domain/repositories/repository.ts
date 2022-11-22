import { Game } from '../entities/game-entity';
import { Profile } from '../entities/profile-entity';
import { User } from '../entities/user-entity';

export interface Repository {
  create(body: Game | Profile | User): Promise<Game | Profile | User>;
  getOne(id: string): Promise<Game | Profile | User | void>;
  getAll(): Promise<Game[] | Profile[] | User[] | []>;
  update(
    body: Game | Profile | User,
    id: string,
  ): Promise<Game | Profile | User | void>;
  delete(id: string): Promise<Game | Profile | User | void>;
}
