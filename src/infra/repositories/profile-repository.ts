import { ProfileEntityInterface } from 'src/domain/entities/profile-entity-interface';
import { ProfileRepositoryInterface } from 'src/infra/repositories/abstract/profile-repository-interface';
import { prismaDatabase } from '../database/prisma-database';

export class ProfileRepository implements ProfileRepositoryInterface {
  async create(body: ProfileEntityInterface): Promise<ProfileEntityInterface> {
    delete body.favoriteGames;
    return await prismaDatabase.profile.create({
      data: body,
      include: { favoriteGames: true },
    });
  }

  async getOne(id: string): Promise<ProfileEntityInterface> {
    return await prismaDatabase.profile.findUnique({
      where: {
        id: id,
      },
      include: { favoriteGames: true },
    });
  }

  async getAll(): Promise<ProfileEntityInterface[]> {
    return await prismaDatabase.profile.findMany({
      include: { favoriteGames: true },
    });
  }

  async update(
    body: ProfileEntityInterface,
    id: string,
  ): Promise<ProfileEntityInterface> {
    return await prismaDatabase.profile.update({
      where: { id: id },
      include: { favoriteGames: true },
      data: {
        id: body.id,
        title: body.title,
        imageUrl: body.imageUrl,
        userId: body.userId,
        createdAt: body.createdAt,
        updatedAt: body.updatedAt,
      },
    });
  }

  async delete(id: string): Promise<void | ProfileEntityInterface> {
    return await prismaDatabase.profile.delete({
      where: { id: id },
      include: { favoriteGames: true },
    });
  }
}
