import { Profile } from 'src/domain/entities/profile-entity';
import { Repository } from 'src/domain/repositories/repository';
import { arrProfiles } from '../database/mocked';

export class ProfileRepository implements Repository {
  create(body: Profile): Promise<Profile> {
    return new Promise((resolve) => {
      arrProfiles.push(body);
      resolve(body);
    });
  }

  getOne(id: string): Promise<Profile> {
    return new Promise((resolve) => {
      const foundProfile = arrProfiles.find((profile) => profile.id === id);
      resolve(foundProfile);
    });
  }

  getAll(): Promise<Profile[]> {
    return new Promise((resolve) => resolve(arrProfiles));
  }

  update(body: Profile, id: string): Promise<Profile> {
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

  delete(id: string): Promise<Profile> {
    return new Promise((resolve) => {
      for (let index = 0; index < arrProfiles.length; index++) {
        if (arrProfiles[index].id === id) {
          arrProfiles.splice(index, 1);
          resolve(arrProfiles[index]);
        }
      }
    });
  }
}
