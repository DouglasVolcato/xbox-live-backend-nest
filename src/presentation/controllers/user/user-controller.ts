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
    const body = httpRequest.body;
    const created = await this.createUserUseCase.execute(body);

    if (created) {
      const http = new HttpResponseHandler({ message: 'User created.' });
      return http.created();
    }
  }

  async getOneByEmail(httpRequest: HttpRequest): Promise<HttpResponse> {
    const email = httpRequest.body.email;
    const foundUser = await this.getOneUserByEmailUseCase.execute(email);

    if (foundUser) {
      const http = new HttpResponseHandler(foundUser);
      return http.ok();
    }
  }

  async getOneById(httpRequest: HttpRequest): Promise<HttpResponse> {
    const id = httpRequest.id;
    const foundUser = await this.getOneUserByIdUseCase.execute(id);

    if (foundUser) {
      const http = new HttpResponseHandler(foundUser);
      return http.ok();
    }
  }

  async getAll(): Promise<HttpResponse> {
    const foundUsers = await this.getAllUsersUseCase.execute();

    if (foundUsers) {
      const http = new HttpResponseHandler(foundUsers);
      return http.ok();
    }
  }

  async update(httpRequest: HttpRequest): Promise<HttpResponse> {
    const id = httpRequest.id;
    const body = httpRequest.body;
    const updated = await this.updateUserUseCase.execute(body, id);

    if (updated) {
      const http = new HttpResponseHandler({ message: 'User updated.' });
      return http.ok();
    }
  }

  async delete(httpRequest: HttpRequest): Promise<HttpResponse> {
    const id = httpRequest.id;
    const deleted = await this.deleteUserUseCase.execute(id);

    if (deleted) {
      const http = new HttpResponseHandler({ message: 'User deleted.' });
      return http.ok();
    }
  }
}
