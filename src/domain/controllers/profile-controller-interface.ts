import { MessageDto } from '../dtos/message-dto';
import { ProfileDto } from '../dtos/profile-dto';
import { ProfileEntityInterface } from '../entities/profile-entity-interface';
import { HttpRequest } from '../http/http-request';
import { HttpRsponse } from '../http/http-response';

export interface ProfileControllerInterface {
  create(httpRequest: HttpRequest<ProfileDto>): Promise<HttpRsponse<MessageDto>>;
  getOne(httpRequest: HttpRequest<undefined>): Promise<HttpRsponse<ProfileEntityInterface>>;
  getAll(httpRequest: HttpRequest<undefined>): Promise<HttpRsponse<ProfileEntityInterface[]>>;
  update(httpRequest: HttpRequest<ProfileDto>): Promise<HttpRsponse<MessageDto>>;
  delete(httpRequest: HttpRequest<undefined>): Promise<HttpRsponse<MessageDto>>;
}
