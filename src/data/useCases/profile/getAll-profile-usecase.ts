import { GetAllProfilesUseCaseInterface } from '../../abstract/profile/getAll-profile-interface';
import { ProfileRepositoryInterface } from 'src/infra/repositories/abstract/profile-repository-interface';
import { ProfileEntityInterface } from 'src/domain/entities/profile-entity-interface';

export class GetAllProfilesUseCase implements GetAllProfilesUseCaseInterface {
  constructor(private readonly repository: ProfileRepositoryInterface) {}

  async execute(userId: string): Promise<ProfileEntityInterface[] | []> {
    const foundProfiles = await this.repository.getAll();
    return foundProfiles.filter((profile) => profile.userId === userId);
  }
}
