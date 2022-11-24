import { Module } from '@nestjs/common';
import { ProfileModule } from './main/nest-adapter/profile/profile.module';
import { UserModule } from './main/nest-adapter/user/user.module';
import { GameModule } from './main/nest-adapter/game/game.module';

@Module({
  imports: [UserModule, ProfileModule, GameModule],
})
export class AppModule {}
