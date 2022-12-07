import { AddGamesProfileUseCaseInterface } from 'src/data/abstract/profile/addGames-profile-interface';
import { ProfileRepositoryInterface } from 'src/infra/repositories/abstract/profile-repository-interface';
import { InvalidParamError } from 'src/utils/errors';

export class AddGamesProfileUseCase implements AddGamesProfileUseCaseInterface {
  constructor(private readonly repository: ProfileRepositoryInterface) {}

  async execute(
    profileId: string,
    gameIds: string[],
    userId: string,
  ): Promise<boolean> {
    const foundProfile = await this.repository.getOne(profileId);

    if (foundProfile && foundProfile.userId === userId) {
      const newFavoriteGames = gameIds.map((gameId) => {
        if (!foundProfile.favoriteGames.find((id) => id === gameId)) {
          return gameId;
        }
      });
      const updatedFavoriteGames = [
        ...foundProfile.favoriteGames,
        ...newFavoriteGames,
      ].sort();

      const updatedProfile = this.repository.updateFavoriteGames(
        profileId,
        updatedFavoriteGames,
      );

      if (updatedProfile) {
        return true;
      } else {
        return false;
      }
    } else {
      throw new InvalidParamError('ID');
    }
  }
}
