import { LoginDto } from '../../domain/dtos/login-dto';
import { MessageDto } from '../../domain/dtos/message-dto';
import { TokenDto } from '../../domain/dtos/token-dto';
import { UserDto } from '../../domain/dtos/user-dto';
import { UserEntityInterface } from '../../domain/entities/user-entity-interface';
import { HttpRequest } from '../../domain/http/http-request';
import { HttpRsponse } from '../../domain/http/http-response';

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
