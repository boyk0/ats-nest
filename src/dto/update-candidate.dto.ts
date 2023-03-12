import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsMobilePhone, IsOptional, IsString } from 'class-validator';

export class UpdateCandidateDto {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  surname?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  location?: string;

  @ApiProperty({ default: '+380000000000' })
  @IsMobilePhone()
  @IsOptional()
  mobile?: string;

  @ApiProperty({ default: 'ats@ats.com' })
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

  @ApiProperty()
  @IsString()
  @IsOptional()
  englishLevel?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  jobOpening?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  seniorityLevel?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  skillSet?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  contactDate?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  dateOfInterview?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  feedbackAfterInterview?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  dateOfTTSent?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  dateOfTTDone?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  dateOfFinalInterview?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  dateOfOfferSent?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  candidateStatus?: string;
}
