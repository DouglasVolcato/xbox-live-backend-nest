import { GameDto } from '../dtos/game-dto';
import { ProfileDto } from '../dtos/profile-dto';
import { UserDto } from '../dtos/user-dto';

export interface PasswordValidator {
  validate(body: UserDto | GameDto | ProfileDto): Promise<boolean>;
}
