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
} from '@nestjs/common';
import { UserDto } from 'src/domain/dtos/user-dto';
const user = makeUserControllerFactory();

@Controller('user')
export class UserController {
  @Post('create-user')
  async create(@Body() body: UserDto) {
    const http = new HttpRequestHandler({ body });
    return await user.update(http.request());
  }

  @Get('get-all-users')
  async getAll(): Promise<HttpResponse> {
    return await user.getAll();
  }

  @Get('get-user-by-id/:id')
  async getOneById(@Param() id: string): Promise<HttpResponse> {
    const http = new HttpRequestHandler({ params: { id } });
    return await user.getOneById(http.request());
  }

  @Get('get-user-by-email')
  async getOneByEmail(@Body() body: any): Promise<HttpResponse> {
    const http = new HttpRequestHandler({ body });
    return await user.getOneByEmail(http.request());
  }

  @Delete('delete-user/:id')
  async delete(@Param() id: string): Promise<HttpResponse> {
    const http = new HttpRequestHandler({ params: { id } });
    return await user.delete(http.request());
  }

  @Patch('update-user/:id')
  async update(
    @Param(':id') id: string,
    @Body() body: UserDto,
  ): Promise<HttpResponse> {
    const http = new HttpRequestHandler({ params: { id }, body });
    return await user.update(http.request());
  }
}
