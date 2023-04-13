import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(userdata: CreateUserDto): {
        message: string;
    };
}
