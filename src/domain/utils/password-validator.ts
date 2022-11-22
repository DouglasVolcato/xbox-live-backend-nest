import { GameDto } from '../dtos/game-dto';
import { ProfileDto } from '../dtos/profile-dto';
import { UserDto } from '../dtos/user-dto';

export interface PasswordValidator {
  validatePassword(body: UserDto | GameDto | ProfileDto): Promise<boolean>;
}
