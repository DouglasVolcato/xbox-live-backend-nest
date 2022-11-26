import { GameDto } from 'src/domain/dtos/game-dto';
import { GameEntityInterface } from 'src/domain/entities/game-entity-interface';
import { GameValidatorInterface } from 'src/entities/abstract/game-validator-interface';
import { IdGeneratorAdapter } from 'src/utils/adapters/id-generator-adapter';
import { MissingParamError } from 'src/utils/errors';

export class GameEntity implements GameValidatorInterface {
  constructor(private readonly game: GameDto) {}

  validateBody(): void {
    if (!this.game.title) {
      throw new MissingParamError('Title');
    }
    if (!this.game.year) {
      throw new MissingParamError('Year');
    }
    if (!this.game.description) {
      throw new MissingParamError('Description');
    }
    if (!this.game.coverImageUrl) {
      throw new MissingParamError('Cover image');
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
