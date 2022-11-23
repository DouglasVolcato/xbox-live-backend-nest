import { ProfileDto } from '../../../../domain/dtos/profile-dto';

export interface UpdateProfileUseCaseInterface {
  execute(body: ProfileDto, id: string): Promise<boolean>;
}
