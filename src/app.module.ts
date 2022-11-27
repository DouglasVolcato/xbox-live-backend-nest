import { Module } from '@nestjs/common';
import { ProfileModule } from './main/nest-adapter/modules/profile.module';
import { UserModule } from './main/nest-adapter/modules/user.module';
import { GameModule } from './main/nest-adapter/modules/game.module';
import { ApiTestModule } from './main/nest-adapter/modules/apiTest.module';

@Module({
  imports: [ApiTestModule, UserModule, ProfileModule, GameModule],
})
export class AppModule {}
