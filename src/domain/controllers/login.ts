import { HttpRequest } from '../http/http-request';
import { HttpRsponse } from '../http/http-response';

export interface LoginController {
  login(body: HttpRequest): Promise<HttpRsponse>;
}
