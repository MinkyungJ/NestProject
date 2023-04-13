import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'
import { UserModule } from './tweet_user/user.module';
import { User } from './tweet_user/entities/user.entity';
import { LoginModule } from './login/login.module';
import { TweetPostModule } from './tweet_post/tweet.module';
import { Tweet } from './tweet_post/entities/tweet.entity';
import { Like } from './tweet_post/entities/tweetLike.entity';
import { Bookmark } from './tweet_post/entities/tweetBookmark.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOST,
      port: parseInt(process.env.PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PW,
      database: process.env.DB_DATABASE,
      entities: [User, Tweet, Like, Bookmark],
      synchronize: true,
    }),
    UserModule,
    LoginModule,
    TweetPostModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
