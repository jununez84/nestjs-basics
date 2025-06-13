import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CharacterService } from './character.service';
import { Character } from 'src/model/character';
import { AuthGuard } from 'src/core/auth/auth.guard';

@Controller('character')
export class CharacterController {
    constructor(private characterService: CharacterService) {}

    @Get()
    getAll() {
        return this.characterService.findAll();
    }

    @Get(':id')
    getById(@Param('id') id: string) {
        return this.characterService.findOne(id);
    }

    @Post()
    @UseGuards(AuthGuard)
    add(@Body() character: Character): Character {
        return this.characterService.create(character);
    }

    @Put(':id')
    modify(@Param('id') id: string, @Body() character: Character): Character {
        return this.characterService.update(id, character);
    }
}
