import { UserRepositoryInterface } from 'src/infra/repositories/abstract/user-repository-interface';
import { DeleteUserUseCaseInterface } from 'src/data/useCases/abstract/user/delete-user-interface';

export class DeleteUserUseCase implements DeleteUserUseCaseInterface {
  constructor(private readonly repository: UserRepositoryInterface) {}

  async execute(id: string): Promise<boolean> {
    const deletedUser = await this.repository.delete(id);
    switch (deletedUser) {
      case deletedUser:
        return true;
      default:
        return false;
    }
  }
}
