export interface Hasher {
  hash(password: string): Promise<boolean>;
  compare(password: string, hashedPassword: string): Promise<boolean>;
}
