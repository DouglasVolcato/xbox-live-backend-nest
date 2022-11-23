import { GameDto } from '../../domain/dtos/game-dto';
import { MessageDto } from '../../domain/dtos/message-dto';
import { GameEntityInterface } from '../../domain/entities/game-entity-interface';
import { HttpRequest } from '../../domain/http/http-request';
import { HttpRsponse } from '../../domain/http/http-response';

export interface ProfileControllerInterface {
  create(httpRequest: HttpRequest<GameDto>): Promise<HttpRsponse<MessageDto>>;
  getOne(
    httpRequest: HttpRequest<undefined>,
  ): Promise<HttpRsponse<GameEntityInterface>>;
  getAll(
    httpRequest: HttpRequest<undefined>,
  ): Promise<HttpRsponse<GameEntityInterface[]>>;
  update(httpRequest: HttpRequest<GameDto>): Promise<HttpRsponse<MessageDto>>;
  delete(httpRequest: HttpRequest<undefined>): Promise<HttpRsponse<MessageDto>>;
}
