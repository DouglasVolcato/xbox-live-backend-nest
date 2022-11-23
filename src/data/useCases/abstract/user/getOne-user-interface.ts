import { UserEntityInterface } from 'src/domain/entities/user-entity-interface';

export interface GetOneUserUseCaseInterface {
  execute(id: string): Promise<UserEntityInterface | void>;
}
