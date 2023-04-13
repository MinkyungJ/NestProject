import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginModule } from 'src/login/login.module';
import { Tweet } from './entities/tweet.entity';
import { TweetPostController } from './tweet.controller';
import { TweetPostService } from './tweet.service';
import { Bookmark } from './entities/tweetBookmark.entity';
import { Like } from './entities/tweetLike.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tweet, Bookmark, Like]), LoginModule],
  controllers: [TweetPostController],
  providers: [TypeOrmModule, TweetPostService],
  exports: [TweetPostService],
})
export class TweetPostModule {}
