import { RequestBodyDto } from 'src/domain/dtos/request-body-dto';
import { HttpRequest } from 'src/domain/http/http-request';
import { HttpRequestHandlerInterface } from '../../abstract/handlers/http/http-request-handler-interface';

export class HttpRequestHandler implements HttpRequestHandlerInterface {
  constructor(private readonly clientRequest: RequestBodyDto) {}

  request(): HttpRequest {
    return {
      authorization: this.clientRequest.headers.authorization && '',
      id: this.clientRequest.params.id && '',
      body: this.clientRequest.body,
    };
  }
}
