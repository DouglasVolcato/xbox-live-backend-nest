export interface TokenHandlerInterface {
  generateToken(): string;
  validateToken(token: string): Promise<boolean>;
}
