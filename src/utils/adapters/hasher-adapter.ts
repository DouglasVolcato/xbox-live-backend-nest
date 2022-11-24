import { HasherInterface } from '../abstract/hasher-interface';
import bcrypt from 'bcrypt';

export class HasherAdapter implements HasherInterface {
  async hash(password: string, saltRounds: number): Promise<string> {
    return await bcrypt.hash(password, saltRounds);
  }
  async compare(password: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
  }
}
