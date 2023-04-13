import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/tweet_user/user.module';
import { LoginService } from './login.services';
import { User } from 'src/tweet_user/entities/user.entity';
import { PassportModule } from '@nestjs/passport'
import { LoginController } from './login.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), // TypeOrmModule.forFeature -> User repository Class 전달
    UserModule,
    PassportModule,                   // node.js 인증 라이브러리로 jwt토큰을 확인하여 사용자 인증
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({                 // ConfigService 재정의
        secret: config.get<string>('ACCESS_TOKEN_PRIVATE_KEY'),
        signOptions: { expiresIn: '24h' },
      }),
    }),
  ],
  providers: [TypeOrmModule, LoginService],
  controllers: [LoginController],
  exports: [LoginService],
})
export class LoginModule {}