import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateRecruiterDto {
  @ApiProperty({ required: true })
  @IsString()
  name?: string;

  @ApiProperty()
  @IsString()
  surname: string;

  @ApiProperty({ default: 'ats@ats.com' })
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  position: string;

  @ApiProperty()
  @IsString()
  password: string;
}
