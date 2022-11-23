import { LoginDto } from '../../../domain/dtos/login-dto';

export interface LoginUserUseCaseInterface {
  execute(body: LoginDto): Promise<boolean>;
}
