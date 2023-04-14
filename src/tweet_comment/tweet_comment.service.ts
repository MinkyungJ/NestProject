import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';
import { BasicCommentDto } from './dto/basicComment.dto';
import { CreateCommentDto } from './dto/createComment.dto';
import { DetailCommentDto } from './dto/detailComment.dto';
import { EditCommentDto } from './dto/editComment.dto';
import { TweetComment } from './entities/tweet_comment.entity';

@Injectable()
export class TweetCommentService {
  constructor(
    @InjectRepository(TweetComment)
    private tweetCommentRepository: Repository<TweetComment>,
  ) {}

  async getMyComment(userId: number): Promise<BasicCommentDto[]> {
    const isUser = await this.tweetCommentRepository.find({
      where: {userId: userId },
    });
    return plainToClass(BasicCommentDto, isUser);
  }

  async getOneComment(tweetId: number): Promise<DetailCommentDto[]> {
    const tweetComment = await this.tweetCommentRepository.find({
      where: { tweetId: tweetId },
    });
    return plainToClass(DetailCommentDto, tweetComment);
  }

  async createComment(
    tweetCommentData: CreateCommentDto,
    userId: number,
    tweetId: number,
  ): Promise<CreateCommentDto> {
    try {
      const data = {
        ...tweetCommentData,
      };

      data.userId = userId;
      data.tweetId = tweetId;
      return await this.tweetCommentRepository.save(data);
    } catch (e) {
      console.log(e);
    }
  }

  async editComment(tweetId: number, updateData: EditCommentDto) {
    return await this.tweetCommentRepository.update(
      { tweetId: tweetId },
      updateData,
    );
  }

  async deleteComment(tweetId: number) {
    return await this.tweetCommentRepository.delete({ tweetId: tweetId });
  }
}
