import { Tweet } from 'src/tweet_post/entities/tweet.entity';
import { User } from 'src/tweet_user/entities/user.entity';
export declare class TweetComment {
    id: number;
    comments: string;
    userId: number;
    tweetId: number;
    createdAt: Date;
    user: User;
    tweet: Tweet;
}
