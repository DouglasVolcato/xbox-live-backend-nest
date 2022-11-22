import { Game } from '../entities/game-entity';
import { Profile } from '../entities/profile-entity';
import { User } from '../entities/user-entity';

export interface HttpRsponse {
  statusCode: number;
  body?: Game | User | Profile | Game[] | User[] | Profile[];
  message?: string;
  token?: string;
}
