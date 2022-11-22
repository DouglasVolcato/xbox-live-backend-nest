import { Game } from '../entities/game-entity';
import { Profile } from '../entities/profile-entity';
import { User } from '../entities/user-entity';

interface Message {
  message: string;
}

interface Token {
  token: string;
}

export interface HttpRsponse {
  statusCode: number;
  body: Game | User | Profile | Game[] | User[] | Profile[] | Message | Token;
}
