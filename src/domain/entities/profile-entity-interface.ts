import { GameEntityInterface } from './game-entity-interface';

export interface ProfileEntityInterface {
  id: string;
  title: string;
  imageUrl: string;
  user_id: string;
  favorite_games: GameEntityInterface[];
  created_at: Date;
  updated_at: Date;
}
