export interface TokenHandlerInterface {
  generateToken(userId: string): string;
  validateToken(token: string): void;
}
