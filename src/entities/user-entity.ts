import { UserDto } from 'src/domain/dtos/user-dto';
import { UserEntityInterface } from 'src/domain/entities/user-entity-interface';
import { UserValidatorInterface } from 'src/entities/abstract/user-validator-interface';
import { HasherAdapter } from 'src/utils/adapters/hasher-adapter';
import { IdGeneratorAdapter } from 'src/utils/adapters/id-generator-adapter';
import { MissingParamError } from 'src/utils/errors';

export class UserEntity implements UserValidatorInterface {
  constructor(private readonly user: UserDto) {}

  validateBody(): void {
    if (!this.user.name) {
      throw new MissingParamError('Name');
    }
    if (!this.user.password) {
      throw new MissingParamError('Password');
    }
    if (!this.user.email) {
      throw new MissingParamError('Email');
    }
  }

  async getBody(): Promise<UserEntityInterface> {
    const idGenerator = new IdGeneratorAdapter();
    const hasher = new HasherAdapter();
    const generatedId = idGenerator.generateId();
    const hashedPassword = await hasher.hash(this.user.password, 10);

    return {
      id: generatedId,
      name: this.user.name,
      email: this.user.email,
      password: hashedPassword,
      cpf: this.user.cpf ?? '',
      isAdmin: this.user.isAdmin ?? true,
    };
  }
}
