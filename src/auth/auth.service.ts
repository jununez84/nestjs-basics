import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/model/user';

@Injectable()
export class AuthService {
    users: User[] = [
        { id: 1, username: 'admin', password: 'admin', role: 'admin' },
        { id: 2, username: 'john', password: 'guess', role: 'user' },
    ];

    constructor(private jwtService: JwtService) {}

    async login(username: string, password: string): Promise<string> {
        const user = this.users.find(
            (user) => user.username === username && user.password === password,
        );

        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        return this.generateToken(user);
    }

    async generateToken(user: User): Promise<string> {
        const payload = { sub: user.id, username: user.username, role: user.role };
        return this.jwtService.sign(payload, { secret: 'abc123', expiresIn: '1h' });
    }
}
