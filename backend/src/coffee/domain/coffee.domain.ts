import { IsNotEmpty, IsString } from 'class-validator';

export class CoffeeDomain {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsString()
  @IsNotEmpty()
  readonly type: string;

  @IsString()
  readonly imgUrl?: string;
}
