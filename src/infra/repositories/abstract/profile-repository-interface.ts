import { ProfileEntityInterface } from '../../../domain/entities/profile-entity-interface';

export interface ProfileRepositoryInterface {
  create(body: ProfileEntityInterface): Promise<ProfileEntityInterface>;
  getOne(
    profileId: string,
    userId: string,
  ): Promise<ProfileEntityInterface | void>;
  getAll(userId: string): Promise<ProfileEntityInterface[] | []>;
  update(
    body: ProfileEntityInterface,
    profileid: string,
    userId: string,
  ): Promise<ProfileEntityInterface | void>;
  delete(
    profileId: string,
    userId: string,
  ): Promise<ProfileEntityInterface | void>;
}
