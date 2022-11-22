import { ProfileDto } from '../dtos/profile-dto';
import { Profile } from '../entities/profile';

export interface ProfileRepository {
  create(profileBody: Profile): Promise<Profile>;
  getOne(profileId: string): Promise<Profile>;
  getAll(): Promise<Profile[]>;
  update(profileBody: ProfileDto): Promise<Profile>;
  delete(profileId: string): Promise<Profile>;
}
