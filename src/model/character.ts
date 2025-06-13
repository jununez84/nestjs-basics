import { IsEmail, IsEmpty, IsNotEmpty, IsString, ValidateIf } from "class-validator";

export class Character {
    @ValidateIf(o => o.id !== undefined)
    @IsString()
    id?: string;
    
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    status: 'alive' | 'dead';

    @IsString()
    gender: 'm' | 'f';

    @IsEmail()
    email: string;
}