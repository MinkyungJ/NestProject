import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTweetDto {
  @IsString()
  contents: string;

  @IsOptional()
  @IsNumber()
  likes: number;

  @IsOptional()
  @IsBoolean()
  bookmark: boolean;

  @IsOptional()
  @IsNumber()
  userId: number;

  @IsOptional()
  @IsNumber()
  id: number;
}
