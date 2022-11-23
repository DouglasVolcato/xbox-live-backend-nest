import { LoginDto } from '../dtos/login-dto';
import { MessageDto } from '../dtos/message-dto';
import { TokenDto } from '../dtos/token-dto';
import { UserDto } from '../dtos/user-dto';
import { UserEntityInterface } from '../entities/user-entity-interface';
import { HttpRequest } from '../http/http-request';
import { HttpRsponse } from '../http/http-response';

export interface UserControllerInterface {
  create(httpRequest: HttpRequest<UserDto>): Promise<HttpRsponse<MessageDto>>;
  getOne(
    httpRequest: HttpRequest<undefined>,
  ): Promise<HttpRsponse<UserEntityInterface>>;
  getAll(
    httpRequest: HttpRequest<undefined>,
  ): Promise<HttpRsponse<UserEntityInterface[]>>;
  update(httpRequest: HttpRequest<UserDto>): Promise<HttpRsponse<MessageDto>>;
  delete(httpRequest: HttpRequest<undefined>): Promise<HttpRsponse<MessageDto>>;
  login(body: HttpRequest<LoginDto>): Promise<HttpRsponse<TokenDto>>;
}
