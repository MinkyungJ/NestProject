import { User } from 'src/tweet_user/entities/user.entity';
import { Tweet } from './tweet.entity';
export declare class Bookmark {
    id: number;
    userId: number;
    user: User;
    tweetId: number;
    tweet: Tweet;
}
