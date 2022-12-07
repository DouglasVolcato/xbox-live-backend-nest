import { DeleteProfileUseCaseInterface } from '../../abstract/profile/delete-profile-interface';
import { ProfileRepositoryInterface } from 'src/infra/repositories/abstract/profile-repository-interface';

export class DeleteProfileUseCase implements DeleteProfileUseCaseInterface {
  constructor(private readonly repository: ProfileRepositoryInterface) {}

  async execute(profileId: string, userId: string): Promise<boolean> {
    const foundProfile = await this.repository.getOne(profileId);

    if (foundProfile && foundProfile.userId === userId) {
      const deletedProfile = await this.repository.delete(profileId);
      if (deletedProfile) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
