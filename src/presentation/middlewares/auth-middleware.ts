import { UserEntityInterface } from 'src/domain/entities/user-entity-interface';
import { TokenHandlerAdapter } from 'src/utils/adapters/token-handler-adapter';
import { UnauthorizedError } from 'src/utils/errors';
import { AuthMiddlewareInterface } from '../abstract/middlewares/auth-middleware-interface';
import { HttpRequest } from '../controllers/profile/interface-imports';

export class AuthMiddleware implements AuthMiddlewareInterface {
  constructor(private readonly tokenHandler: TokenHandlerAdapter) {}

  async auth(httpRequest: HttpRequest): Promise<UserEntityInterface> {
    try {
      const authorization = httpRequest.authorization;

      if (!authorization) {
        throw new UnauthorizedError('Invalid Token');
      }

      const split = authorization.split(' ');

      if (!split || split[0] !== 'Bearer' || split.length !== 2) {
        throw new UnauthorizedError('Invalid Token');
      }

      const user = await this.tokenHandler.validateToken(split[1]);

      return user;
    } catch (error) {
      throw new UnauthorizedError('Invalid Token');
    }
  }
}
