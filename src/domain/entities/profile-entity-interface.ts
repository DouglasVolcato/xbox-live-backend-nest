import { GameEntityInterface } from './game-entity-interface';

export interface ProfileEntityInterface {
  id: string;
  title: string;
  imageUrl: string;
  favorite_games: GameEntityInterface[];
  userId: string;
  createdAt: string;
  updatedAt: string;
}
