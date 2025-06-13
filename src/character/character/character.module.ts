import { Module } from '@nestjs/common';
import { CharacterService } from './character.service';
import { CharacterController } from './character.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  providers: [CharacterService],
  controllers: [CharacterController],
  imports: [JwtModule]
})
export class CharacterModule {}
