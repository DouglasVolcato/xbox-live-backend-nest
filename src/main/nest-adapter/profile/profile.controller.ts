import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProfileDto } from 'src/domain/dtos/profile-dto';
import { HttpResponse } from 'src/domain/http/http-response';
import { makeProfileControllerFactory } from 'src/main/factories/profile-controller-factory';
import { HttpRequestHandler } from 'src/utils/handlers/http/http-request-handler';
const profile = makeProfileControllerFactory();

@Controller('profile')
export class ProfileController {
  @Post('create-profile')
  async create(@Body() body: ProfileDto) {
    const http = new HttpRequestHandler({ body });
    return await profile.create(http.request());
  }

  @Get('get-all-profiles')
  async getAll(): Promise<HttpResponse> {
    return await profile.getAll();
  }

  @Get('get-profile/:id')
  async getOneById(@Param('id') id: string): Promise<HttpResponse> {
    const http = new HttpRequestHandler({ params: { id } });
    return await profile.getOne(http.request());
  }

  @Delete('delete-profile/:id')
  async delete(@Param('id') id: string): Promise<HttpResponse> {
    const http = new HttpRequestHandler({ params: { id } });
    return await profile.delete(http.request());
  }

  @Patch('update-profile/:id')
  async update(
    @Param('id') id: string,
    @Body() body: ProfileDto,
  ): Promise<HttpResponse> {
    const http = new HttpRequestHandler({ params: { id }, body });
    return await profile.update(http.request());
  }
}
