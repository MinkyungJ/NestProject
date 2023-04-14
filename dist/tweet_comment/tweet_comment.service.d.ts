import { Repository } from 'typeorm';
import { BasicCommentDto } from './dto/basicComment.dto';
import { CreateCommentDto } from './dto/createComment.dto';
import { DetailCommentDto } from './dto/detailComment.dto';
import { EditCommentDto } from './dto/editComment.dto';
import { TweetComment } from './entities/tweet_comment.entity';
export declare class TweetCommentService {
    private tweetCommentRepository;
    constructor(tweetCommentRepository: Repository<TweetComment>);
    getMyComment(userId: number): Promise<BasicCommentDto[]>;
    getOneComment(tweetId: number): Promise<DetailCommentDto[]>;
    createComment(tweetCommentData: CreateCommentDto, userId: number, tweetId: number): Promise<CreateCommentDto>;
    editComment(tweetId: number, updateData: EditCommentDto): Promise<import("typeorm").UpdateResult>;
    deleteComment(tweetId: number): Promise<import("typeorm").DeleteResult>;
}
