import { ProfileEntityInterface } from 'src/domain/entities/profile-entity-interface';
import { ProfileRepositoryInterface } from 'src/infra/repositories/abstract/profile-repository-interface';
import { arrProfiles } from '../database/mocked';

export class ProfileRepository implements ProfileRepositoryInterface {
  create(body: ProfileEntityInterface): Promise<ProfileEntityInterface> {
    return new Promise((resolve) => {
      arrProfiles.push(body);
      resolve(body);
    });
  }

  getOne(id: string): Promise<ProfileEntityInterface> {
    return new Promise((resolve) => {
      const foundProfile = arrProfiles.find((profile) => profile.id === id);
      resolve(foundProfile);
    });
  }

  getAll(): Promise<ProfileEntityInterface[]> {
    return new Promise((resolve) => resolve(arrProfiles));
  }

  update(
    body: ProfileEntityInterface,
    id: string,
  ): Promise<ProfileEntityInterface> {
    return new Promise((resolve) => {
      for (let index = 0; index < arrProfiles.length; index++) {
        if (arrProfiles[index].id === id) {
          arrProfiles.splice(index, 1, body);
          break;
        }
      }
      resolve(body);
    });
  }

  delete(id: string): Promise<void | ProfileEntityInterface> {
    return new Promise((resolve) => {
      for (let index = 0; index < arrProfiles.length; index++) {
        if (arrProfiles[index].id === id) {
          const deletedItem = arrProfiles.splice(index, 1);
          resolve(deletedItem[0]);
        }
      }
      resolve();
    });
  }
}
