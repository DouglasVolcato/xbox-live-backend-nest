import {
  CreateUserUseCaseInterface,
  DeleteUserUseCaseInterface,
  GetOneUserByEmailUseCaseInterface,
  GetOneUserByIdUseCaseInterface,
  UpdateUserUseCaseInterface,
  UserControllerInterface,
  HttpRequest,
  HttpResponse,
  GetAllUsersUseCaseInterface,
} from './interface-imports';
import { HttpResponseHandler } from 'src/utils/handlers/http/http-response-handler';

export class UserController implements UserControllerInterface {
  constructor(
    private readonly createUserUseCase: CreateUserUseCaseInterface,
    private readonly getOneUserByEmailUseCase: GetOneUserByEmailUseCaseInterface,
    private readonly getOneUserByIdUseCase: GetOneUserByIdUseCaseInterface,
    private readonly getAllUsersUseCase: GetAllUsersUseCaseInterface,
    private readonly updateUserUseCase: UpdateUserUseCaseInterface,
    private readonly deleteUserUseCase: DeleteUserUseCaseInterface,
  ) {}

  async create(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const body = httpRequest.body;
      const created = await this.createUserUseCase.execute(body);

      if (created) {
        const http = new HttpResponseHandler({ message: 'User created.' });
        return http.created();
      } else {
        const http = new HttpResponseHandler({ message: 'An error occurred.' });
        return http.badRequest();
      }
    } catch (error) {
      const http = new HttpResponseHandler(error);
      return http.badRequest();
    }
  }

  async getOneByEmail(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const email = httpRequest.body.email;
      const foundUser = await this.getOneUserByEmailUseCase.execute(email);

      if (foundUser) {
        const http = new HttpResponseHandler(foundUser);
        return http.ok();
      } else {
        const http = new HttpResponseHandler({ message: 'Not found.' });
        return http.notFound();
      }
    } catch (error) {
      const http = new HttpResponseHandler(error);
      return http.notFound();
    }
  }

  async getOneById(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const id = httpRequest.id;
      const foundUser = await this.getOneUserByIdUseCase.execute(id);

      if (foundUser) {
        const http = new HttpResponseHandler(foundUser);
        return http.ok();
      } else {
        const http = new HttpResponseHandler({ message: 'Not found.' });
        return http.notFound();
      }
    } catch (error) {
      const http = new HttpResponseHandler(error);
      return http.notFound();
    }
  }

  async getAll(): Promise<HttpResponse> {
    try {
      const foundUsers = await this.getAllUsersUseCase.execute();

      if (foundUsers.length > 0) {
        const http = new HttpResponseHandler(foundUsers);
        return http.ok();
      } else {
        const http = new HttpResponseHandler({ message: 'Not found.' });
        return http.notFound();
      }
    } catch (error) {
      const http = new HttpResponseHandler(error);
      return http.notFound();
    }
  }

  async update(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const id = httpRequest.id;
      const body = httpRequest.body;
      const updated = await this.updateUserUseCase.execute(body, id);

      if (updated) {
        const http = new HttpResponseHandler({ message: 'User updated.' });
        return http.ok();
      } else {
        const http = new HttpResponseHandler({ message: 'An error occurred.' });
        return http.badRequest();
      }
    } catch (error) {
      const http = new HttpResponseHandler(error);
      return http.badRequest();
    }
  }

  async delete(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const id = httpRequest.id;
      const deleted = await this.deleteUserUseCase.execute(id);

      if (deleted) {
        const http = new HttpResponseHandler({ message: 'User deleted.' });
        return http.ok();
      } else {
        const http = new HttpResponseHandler({ message: 'An error occurred.' });
        return http.badRequest();
      }
    } catch (error) {
      const http = new HttpResponseHandler(error);
      return http.badRequest();
    }
  }
}
