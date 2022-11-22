export interface TokenHandler {
  generateToken(): string;
  validateToken(token: string): Promise<boolean>;
}
