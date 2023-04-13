import { BaseEntity } from 'typeorm';
export declare class User extends BaseEntity {
    id: number;
    user_name: string;
    user_email: string;
    user_password: string;
    user_birthday: string;
    createdAt: Date;
}
