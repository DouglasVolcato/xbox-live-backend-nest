import { LoginDto } from '../dtos/login-dto';

export interface LoginUseCase {
  execute(body: LoginDto): Promise<boolean>;
}
