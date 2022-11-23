import { ProfileEntityInterface } from '../../../domain/entities/profile-entity-interface';

export interface ProfileRepositoryInterface {
  create(body: ProfileEntityInterface): Promise<ProfileEntityInterface>;
  getOne(id: string): Promise<ProfileEntityInterface | void>;
  getAll(): Promise<ProfileEntityInterface[] | []>;
  update(
    body: ProfileEntityInterface,
    id: string,
  ): Promise<ProfileEntityInterface | void>;
  delete(id: string): Promise<ProfileEntityInterface | void>;
}
