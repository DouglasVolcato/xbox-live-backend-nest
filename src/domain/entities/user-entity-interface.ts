import { ProfileEntityInterface } from "./profile-entity-interface";

export interface UserEntityInterface {
  id: string;
  name: string;
  email: string;
  password: string;
  cpf: string;
  isAdmin: boolean;
  profiles: ProfileEntityInterface[];
  created_at: Date;
  updated_at: Date;
}
