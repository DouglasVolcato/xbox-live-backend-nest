import { GameDto } from '../dtos/game-dto';
import { LoginDto } from '../dtos/login-dto';
import { ProfileDto } from '../dtos/profile-dto';
import { UserDto } from '../dtos/user-dto';
import { Game } from '../entities/game-entity';
import { Profile } from '../entities/profile-entity';
import { User } from '../entities/user-entity';

export interface HttpRequest {
  params: { id: string };
  body: User | UserDto | Game | GameDto | Profile | ProfileDto | LoginDto;
  headers?: { authorization: string };
}
