import { HttpResponse } from 'src/domain/http/http-response';
import { HttpResponseHandlerInterface } from '../../abstract/handlers/http/http-response-handler-interface';

export class HttpResponseHandler implements HttpResponseHandlerInterface {
  constructor(
    private readonly body: any,
    private readonly statusCode: number,
  ) {}

  response(): HttpResponse {
    return {
      statusCode: this.statusCode,
      body: this.body,
    };
  }
}
