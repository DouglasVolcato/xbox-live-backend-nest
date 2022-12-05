import { GameEntityInterface } from './game-entity-interface';

export interface ProfileEntityInterface {
  id: string;
  title: string;
  imageUrl: string;
  favoriteGames: GameEntityInterface[];
  userId: string;
  createdAt: string;
  updatedAt: string;
}
