import { LoginAuthUseCaseInterface } from 'src/data/abstract/auth/login-auth-interface';
import { AuthControllerInterface } from 'src/presentation/abstract/controllers/auth-controller-interface';
import { HttpResponseHandler } from 'src/utils/handlers/http/http-response-handler';
import { HttpRequest, HttpResponse } from '../game/interface-imports';

export class AuthController implements AuthControllerInterface {
  constructor(private readonly loginAuthUseCase: LoginAuthUseCaseInterface) {}

  async login(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { email, password } = httpRequest.body;
    const token = await this.loginAuthUseCase.execute({ email, password });

    if (token) {
      const http = new HttpResponseHandler({ token }, 200);
      return http.response();
    }
  }
}
