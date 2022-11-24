import { HttpResponse } from 'src/domain/http/http-response';

export interface HttpResponseHandlerInterface {
  response(): HttpResponse;
}
