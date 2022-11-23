import { ProfileEntityInterface } from 'src/domain/entities/profile-entity-interface';

export interface GetOneProfileUseCaseInterface {
  execute(id: string): Promise<ProfileEntityInterface | void>;
}
