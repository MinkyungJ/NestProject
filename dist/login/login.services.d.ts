import { CreateUserDto } from 'src/tweet_user/dto/user.dto';
import { User } from 'src/tweet_user/entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
export declare class LoginService {
    private jwtService;
    private userRepository;
    constructor(jwtService: JwtService, userRepository: Repository<User>);
    validateUser(email: string, password: string): Promise<any>;
    login(user: CreateUserDto): Promise<string>;
    findByEmail(data: any): Promise<User>;
    decodeToken(token: any): any;
    parseToken(cookie: string): any;
}
