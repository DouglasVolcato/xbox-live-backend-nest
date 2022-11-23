import { UserEntityInterface } from 'src/domain/entities/user-entity-interface';
import { UserRepositoryInterface } from 'src/infra/repositories/abstract/user-repository-interface';
import { GetOneUserUseCaseInterface } from 'src/data/useCases/abstract/user/getOne-user-interface';

export class GetOneUserUseCase implements GetOneUserUseCaseInterface {
  constructor(private readonly repository: UserRepositoryInterface) {}

  async execute(id: string): Promise<UserEntityInterface | void> {
    return await this.repository.getOne(id);
  }
}
