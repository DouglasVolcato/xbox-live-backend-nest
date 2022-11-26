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
import { makeGameControllerFactory } from 'src/main/factories/game-controller-factory';
import { HttpRequestHandler } from 'src/utils/handlers/http/http-request-handler';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { NestGameDto } from '../dtos/game.dto';
import { ResponseInterceptor } from '../interceptors/response-interceptor';
const game = makeGameControllerFactory();

@ApiTags('game')
@Controller('game')
export class GameController {
  @ApiOperation({
    summary: 'Create a game.',
  })
  @Post('create-game')
  @UseInterceptors(ResponseInterceptor)
  async create(@Body() body: NestGameDto) {
    const http = new HttpRequestHandler({ body });
    return await game.create(http.request());
  }

  @ApiOperation({
    summary: 'Get all games.',
  })
  @Get('get-all-games')
  @UseInterceptors(ResponseInterceptor)
  async getAll(): Promise<HttpResponse> {
    return await game.getAll();
  }

  @ApiOperation({
    summary: 'Get one game by ID.',
  })
  @Get('get-game/:id')
  @UseInterceptors(ResponseInterceptor)
  async getOneById(@Param('id') id: string): Promise<HttpResponse> {
    const http = new HttpRequestHandler({ params: { id } });
    return await game.getOne(http.request());
  }

  @ApiOperation({
    summary: 'Delete a game.',
  })
  @Delete('delete-game/:id')
  @UseInterceptors(ResponseInterceptor)
  async delete(@Param('id') id: string): Promise<HttpResponse> {
    const http = new HttpRequestHandler({ params: { id } });
    return await game.delete(http.request());
  }

  @ApiOperation({
    summary: 'Update a game.',
  })
  @Patch('update-game/:id')
  @UseInterceptors(ResponseInterceptor)
  async update(
    @Param('id') id: string,
    @Body() body: NestGameDto,
  ): Promise<HttpResponse> {
    const http = new HttpRequestHandler({ params: { id }, body });
    return await game.update(http.request());
  }
}
