import { RemoveGamesProfileUseCaseInterface } from 'src/data/abstract/profile/removeGames-profile-interface';
import { ProfileRepositoryInterface } from 'src/infra/repositories/abstract/profile-repository-interface';
import { InvalidParamError } from 'src/utils/errors';

export class RemoveGamesProfileUseCase
  implements RemoveGamesProfileUseCaseInterface
{
  constructor(private readonly repository: ProfileRepositoryInterface) {}

  async execute(profileId: string, gameIds: string[]): Promise<boolean> {
    const foundProfile = await this.repository.getOne(profileId);

    if (foundProfile) {
      const currentFavoriteGames = foundProfile.favoriteGames;
      const updatedFavoriteGames = currentFavoriteGames
        .filter((item) => !gameIds.find((id) => id === item))
        .sort();

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
