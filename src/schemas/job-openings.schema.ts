import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type JobOpeningsDocument = HydratedDocument<JobOpenings>;

@Schema()
export class JobOpenings {
  @Prop()
  title?: string;

  @Prop()
  recruiterName: string;

  @Prop()
  teamLead: string;

  @Prop()
  location: string;

  @Prop()
  priorityStatus: string;

  @Prop()
  dateOfOpening: string;

  @Prop()
  type: string;

  @Prop()
  mustHave: string;

  @Prop()
  salaryRange: string;

  @Prop()
  dateOfClosing: string;
}

export const JobOpeningsSchema = SchemaFactory.createForClass(JobOpenings);
