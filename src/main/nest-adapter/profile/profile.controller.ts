import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { HttpResponse } from 'src/domain/http/http-response';
import { makeProfileControllerFactory } from 'src/main/factories/profile-controller-factory';
import { HttpRequestHandler } from 'src/utils/handlers/http/http-request-handler';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { NestProfileDto } from './profile.dto';
import { ErrorDetectorInterceptor } from '../interceptors/error-detector-interceptor';
const profile = makeProfileControllerFactory();

@ApiTags('profile')
@Controller('profile')
export class ProfileController {
  @ApiOperation({
    summary: 'Create a profile.',
  })
  @Post('create-profile')
  @UseInterceptors(ErrorDetectorInterceptor)
  async create(@Body() body: NestProfileDto) {
    const http = new HttpRequestHandler({ body });
    return await profile.create(http.request());
  }

  @ApiOperation({
    summary: 'Get all profiles.',
  })
  @Get('get-all-profiles')
  @UseInterceptors(ErrorDetectorInterceptor)
  async getAll(): Promise<HttpResponse> {
    return await profile.getAll();
  }

  @ApiOperation({
    summary: 'Get one profile by ID.',
  })
  @Get('get-profile/:id')
  @UseInterceptors(ErrorDetectorInterceptor)
  async getOneById(@Param('id') id: string): Promise<HttpResponse> {
    const http = new HttpRequestHandler({ params: { id } });
    return await profile.getOne(http.request());
  }

  @ApiOperation({
    summary: 'Delete a profile.',
  })
  @Delete('delete-profile/:id')
  @UseInterceptors(ErrorDetectorInterceptor)
  async delete(@Param('id') id: string): Promise<HttpResponse> {
    const http = new HttpRequestHandler({ params: { id } });
    return await profile.delete(http.request());
  }

  @ApiOperation({
    summary: 'Update a profile.',
  })
  @Patch('update-profile/:id')
  @UseInterceptors(ErrorDetectorInterceptor)
  async update(
    @Param('id') id: string,
    @Body() body: NestProfileDto,
  ): Promise<HttpResponse> {
    const http = new HttpRequestHandler({ params: { id }, body });
    return await profile.update(http.request());
  }
}
