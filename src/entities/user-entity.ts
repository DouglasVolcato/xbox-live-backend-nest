import { UserDto } from 'src/domain/dtos/user-dto';
import { UserEntityInterface } from 'src/domain/entities/user-entity-interface';
import { UserValidatorInterface } from 'src/entities/abstract/user-validator-interface';
import { IdGeneratorAdapter } from 'src/utils/adapters/id-generator-adapter';

export class UserEntity implements UserValidatorInterface {
  constructor(private readonly user: UserDto) {}

  validateBody(): void {
    if (!this.user.name || !this.user.password || !this.user.email) {
      throw new Error(
        'Missing fields for user creation. Make sure you sent, at least, name, password and email.',
      );
    }
  }

  getBody(): UserEntityInterface {
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
