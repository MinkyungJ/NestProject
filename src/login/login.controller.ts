import { Body, Controller, Post, Response } from '@nestjs/common';
import { LoginService } from './login.services';

@Controller('user')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Post('login')
  async login(@Body() body, @Response({ passthrough: true }) res) {      // 두가지 접근 방식 (응답 개체 주입 -> 쿠키 헤더 설정 / 나머지는 프레임 워크) 동시에 사용하는 데코레이터 옵션
    const isUser = await this.loginService.findByEmail(body.user_email);
    const isLogin = await this.loginService.login(isUser);
    res.cookie('Authentication', `Bearer ${isLogin}`);
    return { message: '트위터에 오신걸 환영합니다.' };
  }

  @Post('logout')
  async logout(@Response({ passthrough: true }) res) {
    res.cookie('Authentication', '');
    return { message: '트위터에서 로그아웃 되었습니다. '};
  }
}