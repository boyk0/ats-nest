import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CandidateDocument = HydratedDocument<Candidate>;

@Schema()
export class Candidate {
  @Prop()
  name: string;
  @Prop()
  surname: string;
  @Prop()
  location: string;
  @Prop()
  mobile?: string;
  @Prop()
  email: string;
  @Prop()
  telegramNick?: string;
  @Prop()
  linkedInLink?: string;
  @Prop()
  englishLevel: string;
  @Prop()
  jobOpening?: string;
  @Prop()
  seniorityLevel: string;
  @Prop()
  skillSet: string;
  @Prop()
  contactDate: string;
  @Prop()
  dateOfInterview?: string;
  @Prop()
  feedbackAfterInterview?: string;
  @Prop()
  dateOfTTSent?: string;
  @Prop()
  dateOfTTDone?: string;
  @Prop()
  dateOfFinalInterview?: string;
  @Prop()
  dateOfOfferSent?: string;
  @Prop()
  candidateStatus: string;
}

export const CandidateSchema = SchemaFactory.createForClass(Candidate);
