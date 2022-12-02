import { ProfileEntityInterface } from "./profile-entity-interface";

export interface UserEntityInterface {
  user_id: string;
  name: string;
  email: string;
  password: string;
  cpf: string;
  isAdmin: boolean;
  profiles: ProfileEntityInterface[];
  created_at: Date;
  updated_at: Date;
}
