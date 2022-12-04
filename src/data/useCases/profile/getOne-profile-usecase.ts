import { GetOneProfileUseCaseInterface } from '../../abstract/profile/getOne-profile-interface';
import { ProfileRepositoryInterface } from 'src/infra/repositories/abstract/profile-repository-interface';
import { ProfileEntityInterface } from 'src/domain/entities/profile-entity-interface';

export class GetOneProfileUseCase implements GetOneProfileUseCaseInterface {
  constructor(private readonly repository: ProfileRepositoryInterface) {}

  async execute(
    profileId: string,
    userId: string,
  ): Promise<ProfileEntityInterface | void> {
    return await this.repository.getOne(profileId, userId);
  }
}
