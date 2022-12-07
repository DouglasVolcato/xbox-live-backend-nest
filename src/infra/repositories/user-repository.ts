import { UserEntityInterface } from 'src/domain/entities/user-entity-interface';
import { UserRepositoryInterface } from 'src/infra/repositories/abstract/user-repository-interface';
import { prismaDatabase } from '../database/prisma-database';

export class UserRepository implements UserRepositoryInterface {
  async create(body: UserEntityInterface): Promise<UserEntityInterface> {
    delete body.profiles;
    return await prismaDatabase.user.create({
      data: body,
      include: { profiles: true },
    });
  }

  async getOneByEmail(email: string): Promise<UserEntityInterface> {
    return await prismaDatabase.user.findUnique({
      where: { email: email },
      include: { profiles: true },
    });
  }

  async getOneById(id: string): Promise<UserEntityInterface> {
    return await prismaDatabase.user.findUnique({
      where: { id: id },
      include: { profiles: true },
    });
  }

  async getAll(): Promise<UserEntityInterface[]> {
    return await prismaDatabase.user.findMany({
      include: { profiles: true },
    });
  }

  async update(
    body: UserEntityInterface,
    id: string,
  ): Promise<UserEntityInterface> {
    delete body.profiles;
    return await prismaDatabase.user.update({
      where: { id: id },
      data: body,
      include: { profiles: true },
    });
  }

  async delete(id: string): Promise<void | UserEntityInterface> {
    return await prismaDatabase.user.delete({
      where: { id: id },
      include: { profiles: true },
    });
  }
}
