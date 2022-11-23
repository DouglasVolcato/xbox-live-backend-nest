import { ProfileDto } from 'src/domain/dtos/profile-dto';
import { ProfileEntityInterface } from 'src/domain/entities/profile-entity-interface';
import { ProfileValidatorInterface } from 'src/entities/abstract/profile-validator-interface';
import { IdGeneratorAdapter } from 'src/utils/adapters/id-generator-adapter';

export class ProfileEntity implements ProfileValidatorInterface {
  constructor(private readonly profile: ProfileDto) {}

  validateBody(): void {
    if (!this.profile.title) {
      throw new Error('Missing title for profile creation.');
    }
  }

  getBody(): ProfileEntityInterface {
    return {
      id: new IdGeneratorAdapter().generateId(),
      title: this.profile.title,
      imageUrl: this.profile.imageUrl && '',
    };
  }
}
