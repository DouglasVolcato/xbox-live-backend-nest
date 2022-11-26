import { HttpResponse } from 'src/domain/http/http-response';
import { makeUserControllerFactory } from 'src/main/factories/user-controller-factory';
import { HttpRequestHandler } from 'src/utils/handlers/http/http-request-handler';
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
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { NestUserDto } from './user.dto';
import { ErrorDetectorInterceptor } from '../interceptors/error-detector-interceptor';
const user = makeUserControllerFactory();

@ApiTags('user')
@Controller('user')
export class UserController {
  @ApiOperation({
    summary: 'Create a user.',
  })
  @Post('create-user')
  @UseInterceptors(ErrorDetectorInterceptor)
  async create(@Body() body: NestUserDto) {
    const http = new HttpRequestHandler({ body });
    return await user.create(http.request());
  }

  @ApiOperation({
    summary: 'Get all users.',
  })
  @Get('get-all-users')
  @UseInterceptors(ErrorDetectorInterceptor)
  async getAll(): Promise<HttpResponse> {
    return await user.getAll();
  }

  @ApiOperation({
    summary: 'Get a user by ID.',
  })
  @Get('get-user-by-id/:id')
  @UseInterceptors(ErrorDetectorInterceptor)
  async getOneById(@Param('id') id: string): Promise<HttpResponse> {
    const http = new HttpRequestHandler({ params: { id } });
    return await user.getOneById(http.request());
  }

  @ApiOperation({
    summary: 'Get a user by email.',
  })
  @Get('get-user-by-email')
  @UseInterceptors(ErrorDetectorInterceptor)
  async getOneByEmail(@Body() body: any): Promise<HttpResponse> {
    const http = new HttpRequestHandler({ body });
    return await user.getOneByEmail(http.request());
  }

  @ApiOperation({
    summary: 'Delete a user.',
  })
  @Delete('delete-user/:id')
  @UseInterceptors(ErrorDetectorInterceptor)
  async delete(@Param('id') id: string): Promise<HttpResponse> {
    const http = new HttpRequestHandler({ params: { id } });
    return await user.delete(http.request());
  }

  @ApiOperation({
    summary: 'Update a user.',
  })
  @Patch('update-user/:id')
  @UseInterceptors(ErrorDetectorInterceptor)
  async update(
    @Param('id') id: string,
    @Body() body: NestUserDto,
  ): Promise<HttpResponse> {
    const http = new HttpRequestHandler({ params: { id }, body });
    return await user.update(http.request());
  }
}
