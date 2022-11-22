import { GameDto } from '../dtos/game-dto';
import { ProfileDto } from '../dtos/profile-dto';
import { UserDto } from '../dtos/user-dto';

export interface CreateUseCase {
  execute(body: GameDto | ProfileDto | UserDto): Promise<boolean>;
}
