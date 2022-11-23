import { UpdateProfileUseCaseInterface } from '../abstract/profile/update-profile-interface';
import { ProfileRepositoryInterface } from 'src/infra/repositories/abstract/profile-repository-interface';
import { ProfileDto } from 'src/domain/dtos/profile-dto';

export class UpdateProfileUseCase implements UpdateProfileUseCaseInterface {
  constructor(private readonly repository: ProfileRepositoryInterface) {}

  async execute(body: ProfileDto, id: string): Promise<boolean> {
    const foundProfile = await this.repository.getOne(id);
    if (foundProfile) {
      const updatedBody = Object.assign(foundProfile, body);
      const updatedProfile = await this.repository.update(updatedBody, id);
      switch (updatedProfile) {
        case updatedProfile:
          return true;
        default:
          return false;
      }
    } else {
      return false;
    }
  }
}
