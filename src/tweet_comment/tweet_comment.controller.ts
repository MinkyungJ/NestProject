import { Controller } from '@nestjs/common';
import {
  Body,
  Delete,
  Get,
  Param,
  Post,
  Headers,
  Put,
} from '@nestjs/common/decorators';
import { LoginService } from 'src/login/login.services';
import { CreateCommentDto } from './dto/createComment.dto';
import { EditCommentDto } from './dto/editComment.dto';
import { TweetCommentService } from './tweet_comment.service';

@Controller('tweetcomment')
export class TweetCommentController {
  constructor(
    private tweetCommentService: TweetCommentService,
    private loginService: LoginService,
  ) {}

  @Post('/:tweetId')
  createComment(
    @Headers('cookie') cookie,
    @Param('tweetId') tweetId,
    @Body() tweetCommentData: CreateCommentDto,
  ) {
    const info = this.loginService.parseToken(cookie);
    const userId = Object.values(info)[0];
    this.tweetCommentService.createComment(tweetCommentData, +userId, +tweetId);
    return { message: '댓글이 생성되었습니다.' };
  }

  @Get('/:userId')
  async getMyComment(@Param('userId') userId) {
    return await this.tweetCommentService.getMyComment(+userId);
  }

  @Get('/:tweetId')
  async getOneComment(@Param('tweetId') tweetId) {
    return await this.tweetCommentService.getOneComment(+tweetId);
  }

  @Put('/:tweetId')
  async editComment(
    @Param('tweetId') tweetId,
    @Body() updateData: EditCommentDto,
  ) {
    await this.tweetCommentService.editComment(+tweetId, updateData);
    return { message: '댓글이 수정되었습니다.' };
  }

  @Delete('/:tweetId')
  async deleteComment(@Param('tweetId') tweetId) {
    await this.tweetCommentService.deleteComment(+tweetId);
    return { message: '댓글이 삭제되었습니다.' };
  }
}
