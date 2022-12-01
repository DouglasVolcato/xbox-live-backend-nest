import { HttpRequest } from 'src/domain/http/http-request';

export interface AuthMiddlewareInterface {
  auth(httpRequest: HttpRequest): void;
}
