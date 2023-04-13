import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() userdata: CreateUserDto) {
    this.userService.createUser(userdata);
    return { message: '트위치 계정이 생성되었습니다!' };
  }
}