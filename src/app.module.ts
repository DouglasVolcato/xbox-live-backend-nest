import { Module } from '@nestjs/common';
import { ProfileModule } from './main/nest-adapter/modules/profile.module';
import { UserModule } from './main/nest-adapter/modules/user.module';
import { GameModule } from './main/nest-adapter/modules/game.module';

@Module({
  imports: [UserModule, ProfileModule, GameModule],
})
export class AppModule {}
