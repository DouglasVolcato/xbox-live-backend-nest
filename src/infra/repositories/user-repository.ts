import { User } from 'src/domain/entities/user-entity';
import { Repository } from 'src/domain/repositories/repository';
import { arrUsers } from '../database/mocked';

export class UserRepository implements Repository {
  create(body: User): Promise<User> {
    return new Promise((resolve) => {
      arrUsers.push(body);
      resolve(body);
    });
  }

  getOne(id: string): Promise<User> {
    return new Promise((resolve) => {
      const foundUser = arrUsers.find((user) => user.id === id);
      resolve(foundUser);
    });
  }

  getAll(): Promise<User[]> {
    return new Promise((resolve) => resolve(arrUsers));
  }

  update(body: User, id: string): Promise<User> {
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

  delete(id: string): Promise<User> {
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
