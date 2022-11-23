import { MessageDto } from '../../domain/dtos/message-dto';
import { ProfileDto } from '../../domain/dtos/profile-dto';
import { ProfileEntityInterface } from '../../domain/entities/profile-entity-interface';
import { HttpRequest } from '../../domain/http/http-request';
import { HttpRsponse } from '../../domain/http/http-response';

export interface ProfileControllerInterface {
  create(
    httpRequest: HttpRequest<ProfileDto>,
  ): Promise<HttpRsponse<MessageDto>>;
  getOne(
    httpRequest: HttpRequest<undefined>,
  ): Promise<HttpRsponse<ProfileEntityInterface>>;
  getAll(
    httpRequest: HttpRequest<undefined>,
  ): Promise<HttpRsponse<ProfileEntityInterface[]>>;
  update(
    httpRequest: HttpRequest<ProfileDto>,
  ): Promise<HttpRsponse<MessageDto>>;
  delete(httpRequest: HttpRequest<undefined>): Promise<HttpRsponse<MessageDto>>;
}
