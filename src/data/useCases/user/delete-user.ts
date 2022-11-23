import { Repository } from 'src/domain/repositories/repository';
import { DeleteUseCase } from 'src/domain/useCases/delete-useCase';

export class DeleteUserUseCase implements DeleteUseCase {
  constructor(private readonly repository: Repository) {}

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
