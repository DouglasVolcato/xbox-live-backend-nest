import { UserEntityInterface } from '../../../domain/entities/user-entity-interface';

export interface UserRepositoryInterface {
  create(body: UserEntityInterface): Promise<UserEntityInterface>;
  getOne(id: string): Promise<UserEntityInterface | void>;
  getAll(): Promise<UserEntityInterface[] | []>;
  update(
    body: UserEntityInterface,
    id: string,
  ): Promise<UserEntityInterface | void>;
  delete(id: string): Promise<UserEntityInterface | void>;
}
