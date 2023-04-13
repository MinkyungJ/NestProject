import { Exclude, Expose, Transform } from 'class-transformer';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

@Exclude()
export class DetailTweetDto {
  @Expose()
  @Transform((value, obj) => obj.user.user_name)
  name: string;

  @Expose()
  @IsString()
  contents: string;

  @IsOptional()
  @IsNumber()
  userId: number;

  @Expose()
  @IsDate()
  createdAt: Date;
}
