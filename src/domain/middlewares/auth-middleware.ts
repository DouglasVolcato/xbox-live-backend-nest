import { HttpRequest } from '../http/http-request';

export interface AuthMiddleware {
  auth(httpRequest: HttpRequest): boolean;
}
