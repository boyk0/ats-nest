import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateJobOpeningsDto {
  @ApiProperty({ required: true })
  @IsString()
  title?: string;

  @ApiProperty()
  @IsString()
  recruiterName: string;

  @ApiProperty()
  @IsString()
  teamLead: string;

  @ApiProperty()
  @IsString()
  location: string;

  @ApiProperty()
  @IsString()
  priorityStatus: string;

  @ApiProperty()
  @IsString()
  dateOfOpening: string;

  @ApiProperty()
  @IsString()
  type: string;

  @ApiProperty()
  @IsString()
  mustHave: string;

  @ApiProperty()
  @IsString()
  salaryRange: string;

  @ApiProperty()
  @IsString()
  dateOfClosing: string;
}
