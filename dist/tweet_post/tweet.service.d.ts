import { Repository } from 'typeorm';
import { CreateTweetDto } from './dto/createTweet.dto';
import { BasicTweetDto } from './dto/basicTweet.dto';
import { Tweet } from './entities/tweet.entity';
import { EditTweetDto } from './dto/editTweet.dto';
import { BookmarkTweetDto } from './dto/bookmarkTweet.dto';
import { Like } from './entities/tweetLike.entity';
import { Bookmark } from './entities/tweetBookmark.entity';
import { DetailTweetDto } from './dto/detailTweet.dto';
export declare class TweetPostService {
    private tweetRepository;
    private BookmarkRepository;
    private LikeRepository;
    constructor(tweetRepository: Repository<Tweet>, BookmarkRepository: Repository<Bookmark>, LikeRepository: Repository<Like>);
    createTweet(tweetData: CreateTweetDto, userId: number): Promise<CreateTweetDto>;
    getAllTweet(): Promise<BasicTweetDto[]>;
    getOneTweet(userId: number): Promise<DetailTweetDto[]>;
    editTweet(tweetId: number, data: EditTweetDto): Promise<EditTweetDto>;
    deleteTweet(tweetId: number): Promise<import("typeorm").DeleteResult>;
    checkBookmark(tweetid: number, userid: number): Promise<Bookmark>;
    addBookmark(tweetid: number, userid: number): Promise<{
        tweetId: number;
        userId: number;
    } & Bookmark>;
    deleteBookmark(tweetid: number, userid: number): Promise<Bookmark>;
    getBookmark(userid: number): Promise<Bookmark[]>;
    checkTweetId(bookmarks: {
        id: number;
        userId: number;
        tweetId: number;
    }[]): Promise<number[]>;
    checkTweets(tweetIds: number[]): Promise<BookmarkTweetDto[]>;
    checkLike(tweetId: number, userId: number): Promise<Like>;
    createLike(tweetId: number, userId: number): Promise<{
        tweetId: number;
        userId: number;
    } & Like>;
    deleteLike(tweetId: number, userId: number): Promise<void>;
    countLikes(tweetId: number): Promise<number>;
    updateLikes(tweetId: number, countLikes: number): Promise<{
        contents: string;
        likes: number;
        bookmark: boolean;
        userId: number;
        id: number;
    } & Tweet>;
}
