import { User } from 'src/tweet_user/entities/user.entity';
export declare class Tweet {
    id: number;
    contents: string;
    likes: number;
    bookmark: boolean;
    createdAt: Date;
    userId: number;
    user: User;
}
