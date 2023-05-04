import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateJobOpeningsDto {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  title?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  recruiterName?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  teamLead?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  location?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  priorityStatus?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  dateOfOpening?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  type?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  mustHave?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  salaryRange?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  dateOfClosing?: string;

  @ApiProperty({ required: false })
  @IsString()
  recruiterId?: string;
}
