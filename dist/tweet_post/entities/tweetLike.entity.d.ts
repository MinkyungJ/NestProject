import { User } from 'src/tweet_user/entities/user.entity';
import { Tweet } from './tweet.entity';
export declare class Like {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    user: User;
    tweetId: number;
    tweet: Tweet;
}
