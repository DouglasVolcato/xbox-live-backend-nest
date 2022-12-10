import { GetOneProfileUseCaseInterface } from '../../abstract/profile/getOne-profile-interface';
import { ProfileRepositoryInterface } from '../../../infra/repositories/abstract/profile-repository-interface';
import { ProfileEntityInterface } from '../../../domain/entities/profile-entity-interface';

export class GetOneProfileUseCase implements GetOneProfileUseCaseInterface {
  constructor(private readonly repository: ProfileRepositoryInterface) {}

  async execute(
    profileId: string,
    userId: string,
  ): Promise<ProfileEntityInterface | void> {
    const foundProfile = await this.repository.getOne(profileId);

    if (foundProfile && foundProfile.userId === userId) {
      return foundProfile;
    }
    return;
  }
}
