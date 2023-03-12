import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateJobOpeningsDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  title?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  recruiterName?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  location?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  priorityStatus?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  dateOfOpening?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  type?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  mustHave?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  salaryRange?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  dateOfClosing?: string;
}
