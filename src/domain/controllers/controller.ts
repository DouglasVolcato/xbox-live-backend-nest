import { HttpRequest } from '../http/http-request';
import { HttpRsponse } from '../http/http-response';

export interface Controller {
  create(httpRequest: HttpRequest): Promise<HttpRsponse>;
  getOne(httpRequest: HttpRequest): Promise<HttpRsponse>;
  getAll(httpRequest: HttpRequest): Promise<HttpRsponse>;
  update(httpRequest: HttpRequest): Promise<HttpRsponse>;
  delete(httpRequest: HttpRequest): Promise<HttpRsponse>;
}
