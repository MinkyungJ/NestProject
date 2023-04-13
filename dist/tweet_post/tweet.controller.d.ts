import { TweetPostService } from './tweet.service';
import { CreateTweetDto } from './dto/createTweet.dto';
import { EditTweetDto } from './dto/editTweet.dto';
import { LoginService } from 'src/login/login.services';
export declare class TweetPostController {
    private tweetService;
    private loginService;
    constructor(tweetService: TweetPostService, loginService: LoginService);
    createTweet(cookie: any, tweetData: CreateTweetDto): {
        message: string;
    };
    getAllTweet(): Promise<import("./dto/basicTweet.dto").BasicTweetDto[]>;
    getOneTweet(cookie: any): Promise<import("./dto/detailTweet.dto").DetailTweetDto[]>;
    editTweet(tweetId: any, updateData: EditTweetDto): Promise<{
        message: string;
    }>;
    deleteTweet(tweetId: any): Promise<{
        message: string;
    }>;
    getBookmark(cookie: any): Promise<import("./dto/bookmarkTweet.dto").BookmarkTweetDto[]>;
    addBookmark(cookie: any, tweetid: number): Promise<{
        message: string;
    }>;
    updateLike(cookie: any, tweetid: number): Promise<{
        message: string;
    }>;
}
