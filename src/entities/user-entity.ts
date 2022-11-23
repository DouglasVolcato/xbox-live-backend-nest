import { UserDto } from 'src/domain/dtos/user-dto';
import { User } from 'src/domain/entities/user-entity';
import { BodyHandler } from 'src/domain/utils/body-handler';
import { IdGeneratorAdapter } from 'src/utils/adapters/id-generator-adapter';

export class UserEntity implements BodyHandler {
  constructor(private readonly user: UserDto) {}

  validateBody(): void {
    if (!this.user.name || !this.user.password || !this.user.email) {
      throw new Error(
        'Missing fields for user creation. Make sure you sent, at least name, password and email.',
      );
    }
  }

  getBody(): User {
    return {
      id: new IdGeneratorAdapter().generateId(),
      name: this.user.name,
      email: this.user.email,
      password: this.user.password,
      cpf: this.user.cpf && '',
      isAdmin: this.user.isAdmin && true,
    };
  }
}
