import { UserDto } from '../dtos/user-dto';
import { User } from '../entities/user';

export interface UserRepository {
  create(userBody: User): Promise<User>;
  getOne(userId: string): Promise<User>;
  getAll(): Promise<User[]>;
  update(userBody: UserDto): Promise<User>;
  delete(userId: string): Promise<User>;
}
