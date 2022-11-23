import { LoginDto } from '../../domain/dtos/login-dto';

export interface PasswordValidatorInterface {
  validatePassword(body: LoginDto): Promise<boolean>;
}
