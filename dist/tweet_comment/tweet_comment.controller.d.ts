import { LoginService } from 'src/login/login.services';
import { CreateCommentDto } from './dto/createComment.dto';
import { EditCommentDto } from './dto/editComment.dto';
import { TweetCommentService } from './tweet_comment.service';
export declare class TweetCommentController {
    private tweetCommentService;
    private loginService;
    constructor(tweetCommentService: TweetCommentService, loginService: LoginService);
    createComment(cookie: any, tweetId: any, tweetCommentData: CreateCommentDto): {
        message: string;
    };
    getMyComment(userId: any): Promise<import("./dto/basicComment.dto").BasicCommentDto[]>;
    getOneComment(tweetId: any): Promise<import("./dto/detailComment.dto").DetailCommentDto[]>;
    editComment(tweetId: any, updateData: EditCommentDto): Promise<{
        message: string;
    }>;
    deleteComment(tweetId: any): Promise<{
        message: string;
    }>;
}
