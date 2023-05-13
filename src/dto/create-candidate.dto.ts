import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsMobilePhone, IsOptional, IsString } from 'class-validator';

export class CreateCandidateDto {
  @ApiProperty({ required: true })
  @IsString()
  name?: string;

  @ApiProperty()
  @IsString()
  surname: string;

  @ApiProperty()
  @IsString()
  location: string;

  @ApiProperty({ default: '+380000000000' })
  @IsMobilePhone()
  mobile?: string;

  @ApiProperty({ default: 'ats@ats.com' })
  @IsEmail()
  email: string;

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
  englishLevel: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  jobOpening?: string;

  @ApiProperty()
  @IsString()
  seniorityLevel: string;

  @ApiProperty()
  @IsString()
  skillSet: string;

  @ApiProperty()
  @IsString()
  contactDate: string;

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
  candidateStatus: string;

  @ApiProperty()
  @IsString()
  jobOpeningId: string;
}
