import { HttpRequest } from '../http/http-request';

export interface AuthMiddlewareInterface {
  auth(httpRequest: HttpRequest): boolean;
}
