import { LoginDto } from '../dtos/login-dto';
import { HttpRequest } from '../http/http-request';

export interface AuthMiddlewareInterface {
  auth(httpRequest: HttpRequest<LoginDto>): boolean;
}
