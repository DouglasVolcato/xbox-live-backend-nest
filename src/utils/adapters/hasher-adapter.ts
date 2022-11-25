import { HasherInterface } from '../abstract/adapters/hasher-interface';
import { hash, compare } from 'bcrypt';

export class HasherAdapter implements HasherInterface {
  async hash(password: string, saltRounds: number): Promise<string> {
    return await hash(password, saltRounds);
  }

  async compare(password: string, hashedPassword: string): Promise<boolean> {
    return await compare(password, hashedPassword);
  }
}
