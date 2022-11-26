import {
  CreateProfileUseCaseInterface,
  DeleteProfileUseCaseInterface,
  GetAllProfilesUseCaseInterface,
  GetOneProfileUseCaseInterface,
  UpdateProfileUseCaseInterface,
  ProfileControllerInterface,
  HttpRequest,
  HttpResponse,
} from './interface-imports';
import { HttpResponseHandler } from 'src/utils/handlers/http/http-response-handler';

export class ProfileController implements ProfileControllerInterface {
  constructor(
    private readonly createProfileUseCase: CreateProfileUseCaseInterface,
    private readonly getOneProfileUseCase: GetOneProfileUseCaseInterface,
    private readonly getAllProfilesUseCase: GetAllProfilesUseCaseInterface,
    private readonly updateProfileUseCase: UpdateProfileUseCaseInterface,
    private readonly deleteProfileUseCase: DeleteProfileUseCaseInterface,
  ) {}

  async create(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const body = httpRequest.body;
      const created = await this.createProfileUseCase.execute(body);

      if (created) {
        const http = new HttpResponseHandler({ message: 'Profile created.' });
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
      const foundProfile = await this.getOneProfileUseCase.execute(id);

      if (foundProfile) {
        const http = new HttpResponseHandler(foundProfile);
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
      const foundProfiles = await this.getAllProfilesUseCase.execute();

      if (foundProfiles.length > 0) {
        const http = new HttpResponseHandler(foundProfiles);
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
      const updated = await this.updateProfileUseCase.execute(body, id);

      if (updated) {
        const http = new HttpResponseHandler({ message: 'Profile updated.' });
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
      const deleted = await this.deleteProfileUseCase.execute(id);

      if (deleted) {
        const http = new HttpResponseHandler({ message: 'Profile deleted.' });
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
