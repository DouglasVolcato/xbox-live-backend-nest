import { GameDto } from '../dtos/game-dto';
import { MessageDto } from '../dtos/message-dto';
import { GameEntityInterface } from '../entities/game-entity-interface';
import { HttpRequest } from '../http/http-request';
import { HttpRsponse } from '../http/http-response';

export interface ProfileControllerInterface {
  create(httpRequest: HttpRequest<GameDto>): Promise<HttpRsponse<MessageDto>>;
  getOne(httpRequest: HttpRequest<undefined>): Promise<HttpRsponse<GameEntityInterface>>;
  getAll(
    httpRequest: HttpRequest<undefined>,
  ): Promise<HttpRsponse<GameEntityInterface[]>>;
  update(httpRequest: HttpRequest<GameDto>): Promise<HttpRsponse<MessageDto>>;
  delete(httpRequest: HttpRequest<undefined>): Promise<HttpRsponse<MessageDto>>;
}
