import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { GameDto } from 'src/domain/dtos/game-dto';
import { HttpResponse } from 'src/domain/http/http-response';
import { makeGameControllerFactory } from 'src/main/factories/game-controller-factory';
import { HttpRequestHandler } from 'src/utils/handlers/http/http-request-handler';
const game = makeGameControllerFactory();

@Controller('game')
export class GameController {
  @Post('create-game')
  async create(@Body() body: GameDto) {
    const http = new HttpRequestHandler({ body });
    return await game.update(http.request());
  }

  @Get('get-all-games')
  async getAll(): Promise<HttpResponse> {
    return await game.getAll();
  }

  @Get('get-game/:id')
  async getOneById(@Param() id: string): Promise<HttpResponse> {
    const http = new HttpRequestHandler({ params: { id } });
    return await game.getOne(http.request());
  }

  @Delete('delete-game/:id')
  async delete(@Param() id: string): Promise<HttpResponse> {
    const http = new HttpRequestHandler({ params: { id } });
    return await game.delete(http.request());
  }

  @Patch('update-game/:id')
  async update(
    @Param(':id') id: string,
    @Body() body: GameDto,
  ): Promise<HttpResponse> {
    const http = new HttpRequestHandler({ params: { id }, body });
    return await game.update(http.request());
  }
}
