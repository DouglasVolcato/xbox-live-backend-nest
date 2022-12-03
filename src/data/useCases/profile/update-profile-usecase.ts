import { UpdateProfileUseCaseInterface } from '../../abstract/profile/update-profile-interface';
import { ProfileRepositoryInterface } from 'src/infra/repositories/abstract/profile-repository-interface';
import { ProfileDto } from 'src/domain/dtos/profile-dto';
import { InvalidParamError } from 'src/utils/errors';
import { ProfileEntity } from 'src/entities/profile-entity';

export class UpdateProfileUseCase implements UpdateProfileUseCaseInterface {
  constructor(private readonly repository: ProfileRepositoryInterface) {}

  async execute(body: ProfileDto, id: string): Promise<boolean> {
    const foundProfile = await this.repository.getOne(id);

    if (foundProfile) {
      const updatedBody = new ProfileEntity(body).updateBody(foundProfile);
      const updatedProfile = await this.repository.update(updatedBody, id);

      if (updatedProfile) {
        return true;
      } else {
        return false;
      }
    } else {
      throw new InvalidParamError('ID');
    }
  }
}
