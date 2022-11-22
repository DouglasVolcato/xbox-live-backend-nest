import { GameDto } from './dtos/game-dto';
import { ProfileDto } from './dtos/profile-dto';
import { UserDto } from './dtos/user-dto';
import { Game } from './entities/game';
import { Profile } from './entities/profile';
import { User } from './entities/user';

<<<<<<< HEAD
export interface Repository {
=======
export interface GameRepository {
>>>>>>> 25de99fa03a19f4712fd30c9b302561e7bbb424e
  create(body: Game | Profile | User): Promise<Game | Profile | User>;
  getOne(id: string): Promise<Game | Profile | User>;
  getAll(): Promise<Game[] | Profile[] | User[]>;
  update(body: GameDto | ProfileDto | UserDto): Promise<Game | Profile | User>;
  delete(id: string): Promise<Game | Profile | User>;
}
