import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/user.dto';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    createUser(data: CreateUserDto): Promise<CreateUserDto>;
    transformPassword(user: CreateUserDto): Promise<void>;
}
