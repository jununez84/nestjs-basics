import { Injectable, NotFoundException } from '@nestjs/common';
import { Character } from 'src/model/character';
const { v4: uuidv4 } = require('uuid');

@Injectable()
export class CharacterService {
    private characters: Character[] = [];

    findAll(): Character[] {
        return this.characters;
    }

    findOne(id: string): Character {
        const character = this.characters.find(character => character.id === id);

        if (!character) {
            throw new NotFoundException(`Character with id ${id} not found`);
        }

        return character;
    }

    create(character: Character): Character {
        character.id = uuidv4();
        this.characters.push(character);
        return character;
    }

    update(id: string, character: Character): Character {
        const index = this.characters.findIndex(character => character.id === id);

        if (index === -1) {
            throw new NotFoundException(`Character with id ${id} not found`);
        }

        this.characters[index] = {...this.characters[index], ...character};
        return character;
    }

    remove(id: string): void {
        const index = this.characters.findIndex(character => character.id === id);

        if (index === -1) {
            throw new NotFoundException(`Character with id ${id} not found`);
        }

        this.characters.splice(index, 1);
    }
}
