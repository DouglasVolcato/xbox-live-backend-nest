import { UserEntityInterface } from 'src/domain/entities/user-entity-interface';
import { UserRepositoryInterface } from 'src/infra/repositories/abstract/user-repository-interface';
import { arrUsers } from '../database/mocked';

export class UserRepository implements UserRepositoryInterface {
  create(body: UserEntityInterface): Promise<UserEntityInterface> {
    return new Promise((resolve) => {
      arrUsers.push(body);
      resolve(body);
    });
  }

  getOne(id: string): Promise<UserEntityInterface> {
    return new Promise((resolve) => {
      const foundUser = arrUsers.find((user) => user.id === id);
      resolve(foundUser);
    });
  }

  getAll(): Promise<UserEntityInterface[]> {
    return new Promise((resolve) => resolve(arrUsers));
  }

  update(body: UserEntityInterface, id: string): Promise<UserEntityInterface> {
    return new Promise((resolve) => {
      for (let index = 0; index < arrUsers.length; index++) {
        if (arrUsers[index].id === id) {
          arrUsers.splice(index, 1, body);
          break;
        }
      }
      resolve(body);
    });
  }

  delete(id: string): Promise<UserEntityInterface> {
    return new Promise((resolve) => {
      for (let index = 0; index < arrUsers.length; index++) {
        if (arrUsers[index].id === id) {
          arrUsers.splice(index, 1);
          resolve(arrUsers[index]);
        }
      }
    });
  }
}
