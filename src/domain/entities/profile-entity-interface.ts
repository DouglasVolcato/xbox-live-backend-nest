import { GameEntityInterface } from './game-entity-interface';

export interface ProfileEntityInterface {
  id: string;
  title: string;
  imageUrl: string;
  favorite_games: GameEntityInterface[];
  user_id: string;
  created_at: Date;
  updated_at: Date;
}
