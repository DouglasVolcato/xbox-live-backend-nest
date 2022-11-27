import { ProfileEntityInterface } from 'src/domain/entities/profile-entity-interface';
import { ProfileRepositoryInterface } from 'src/infra/repositories/abstract/profile-repository-interface';
import { prismaDatabase } from '../database/prisma-database';

export class ProfileRepository implements ProfileRepositoryInterface {
  async create(body: ProfileEntityInterface): Promise<ProfileEntityInterface> {
    return await prismaDatabase.profile.create({ data: body });
  }

  async getOne(id: string): Promise<ProfileEntityInterface> {
    return await prismaDatabase.profile.findUnique({
      where: {
        id: id,
      },
    });
  }

  async getAll(): Promise<ProfileEntityInterface[]> {
    return await prismaDatabase.profile.findMany();
  }

  async update(
    body: ProfileEntityInterface,
    id: string,
  ): Promise<ProfileEntityInterface> {
    return await prismaDatabase.profile.update({
      where: { id: id },
      data: body,
    });
  }

  async delete(id: string): Promise<void | ProfileEntityInterface> {
    return await prismaDatabase.profile.delete({
      where: { id: id },
    });
  }
}
