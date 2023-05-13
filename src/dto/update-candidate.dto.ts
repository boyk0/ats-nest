import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsMobilePhone, IsOptional, IsString } from 'class-validator';

export class UpdateCandidateDto {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  surname?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  location?: string;

  @ApiProperty({ required: false, default: '+380000000000' })
  @IsMobilePhone()
  @IsOptional()
  mobile?: string;

  @ApiProperty({ required: false, default: 'ats@ats.com' })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty({ required: false, default: '' })
  @IsString()
  @IsOptional()
  telegramNick?: string;

  @ApiProperty({ required: false, default: '' })
  @IsString()
  @IsOptional()
  linkedInLink?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  englishLevel?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  jobOpening?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  seniorityLevel?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  skillSet?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  contactDate?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  dateOfInterview?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  feedbackAfterInterview?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  dateOfTTSent?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  dateOfTTDone?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  dateOfFinalInterview?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  dateOfOfferSent?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  candidateStatus?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  jobOpeningId?: string;
}
