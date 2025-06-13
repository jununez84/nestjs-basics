import { Module } from '@nestjs/common';
import { CharacterModule } from './character/character/character.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [CharacterModule, AuthModule]
})
export class AppModule {}
