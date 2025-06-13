import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    async login(@Body() user: { username: string, password: string }): Promise<string> {
        return this.authService.login(user.username, user.password);
    }
}
