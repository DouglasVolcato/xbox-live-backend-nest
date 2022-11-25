import { DeleteProfileUseCaseInterface } from '../../abstract/profile/delete-profile-interface';
import { ProfileRepositoryInterface } from 'src/infra/repositories/abstract/profile-repository-interface';

export class DeleteProfileUseCase implements DeleteProfileUseCaseInterface {
  constructor(private readonly repository: ProfileRepositoryInterface) {}

  async execute(id: string): Promise<boolean> {
    const deletedProfile = await this.repository.delete(id);
    if (deletedProfile) {
      return true;
    } else {
      return false;
    }
  }
}
