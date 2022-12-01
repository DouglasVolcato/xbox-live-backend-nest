import { TokenHandlerAdapter } from 'src/utils/adapters/token-handler-adapter';
import { UnauthorizedError } from 'src/utils/errors';
import { AuthMiddlewareInterface } from '../abstract/middlewares/auth-middleware-interface';
import { HttpRequest } from '../controllers/profile/interface-imports';

export class AuthMiddleware implements AuthMiddlewareInterface {
  auth(httpRequest: HttpRequest): void {
    try {
      const authorization = httpRequest.authorization;

      if (!authorization) {
        throw new UnauthorizedError();
      }

      const split = authorization.split(' ');

      if (!split || split[0] !== 'Bearer' || split.length !== 2) {
        throw new UnauthorizedError();
      }

      new TokenHandlerAdapter().validateToken(split[0]);

      return;
    } catch (error) {
      throw new UnauthorizedError();
    }
  }
}
