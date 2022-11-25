import { GameDto } from 'src/domain/dtos/game-dto';
import { GameEntityInterface } from 'src/domain/entities/game-entity-interface';
import { GameValidatorInterface } from 'src/entities/abstract/game-validator-interface';
import { IdGeneratorAdapter } from 'src/utils/adapters/id-generator-adapter';

export class GameEntity implements GameValidatorInterface {
  constructor(private readonly game: GameDto) {}

  validateBody(): void {
    if (
      !this.game.title ||
      !this.game.year ||
      !this.game.description ||
      !this.game.coverImageUrl
    ) {
      throw new Error(
        'Missing fields for game creation. Make sure you sent, at least, title, year, description and cover image url.',
      );
    }
  }

  getBody(): GameEntityInterface {
    return {
      id: new IdGeneratorAdapter().generateId(),
      title: this.game.title,
      coverImageUrl: this.game.coverImageUrl,
      description: this.game.description,
      year: this.game.year,
      imdbScore: this.game.imdbScore ?? 0,
      trailerYouTubeUrl: this.game.trailerYouTubeUrl ?? '',
      gameplayYouTubeUrl: this.game.gameplayYouTubeUrl ?? '',
    };
  }
}
