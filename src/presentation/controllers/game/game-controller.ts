import {
  CreateGameUseCaseInterface,
  DeleteGameUseCaseInterface,
  GetAllGamesUseCaseInterface,
  GetOneGameUseCaseInterface,
  UpdateGameUseCaseInterface,
  GameControllerInterface,
  HttpResponse,
  HttpRequest,
} from './interface-imports';
import { HttpResponseHandler } from 'src/utils/handlers/http/http-response-handler';

export class GameController implements GameControllerInterface {
  constructor(
    private readonly createGameUseCase: CreateGameUseCaseInterface,
    private readonly getOneGameUseCase: GetOneGameUseCaseInterface,
    private readonly getAllGamesUseCase: GetAllGamesUseCaseInterface,
    private readonly updateGameUseCase: UpdateGameUseCaseInterface,
    private readonly deleteGameUseCase: DeleteGameUseCaseInterface,
  ) {}

  async create(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const body = httpRequest.body;
      const created = await this.createGameUseCase.execute(body);

      if (created) {
        const http = new HttpResponseHandler({ message: 'Game created.' });
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

  async getOne(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const id = httpRequest.id;
      const foundGame = await this.getOneGameUseCase.execute(id);

      if (foundGame) {
        const http = new HttpResponseHandler(foundGame);
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
      const foundGames = await this.getAllGamesUseCase.execute();

      if (foundGames.length > 0) {
        const http = new HttpResponseHandler(foundGames);
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
      const updated = await this.updateGameUseCase.execute(body, id);

      if (updated) {
        const http = new HttpResponseHandler({ message: 'Game updated.' });
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
      const deleted = await this.deleteGameUseCase.execute(id);

      if (deleted) {
        const http = new HttpResponseHandler({ message: 'Game deleted.' });
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
