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

  getBody(): UserEntityInterface {
    const generatedId = new IdGeneratorAdapter().generateId();
    const hashedPassword = new HasherAdapter().hash(this.user.password, 10);
    const isAdmin = this.user.secret && this.user.secret === process.env.SECRET;
    const todayDate = new Date().toISOString().split('T')[0];

    return {
      id: this.user.id ?? generatedId,
      name: this.user.name,
      email: this.user.email,
      password: hashedPassword,
      cpf: this.user.cpf ?? '',
      isAdmin: isAdmin,
      profiles: [],
      createdAt: todayDate,
      updatedAt: todayDate,
    };
  }

  updateBody(mainUser: UserEntityInterface) {
    const todayDate = new Date().toISOString().split('T')[0];
    const password = this.user.password
      ? new HasherAdapter().hash(this.user.password, 10)
      : mainUser.password;
    const isAdmin = this.user.secret && this.user.secret === process.env.SECRET;

    return {
      id: mainUser.id,
      name: this.user.name ?? mainUser.name,
      email: this.user.email ?? mainUser.email,
      password: password,
      cpf: this.user.cpf ?? mainUser.cpf,
      isAdmin: isAdmin ?? mainUser.isAdmin,
      profiles: mainUser.profiles,
      createdAt: mainUser.createdAt,
      updatedAt: todayDate,
    };
  }
}
