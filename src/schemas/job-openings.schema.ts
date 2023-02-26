import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type JobOpeningsDocument = HydratedDocument<JobOpenings>;

@Schema()
export class JobOpenings {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const JobOpeningsSchema = SchemaFactory.createForClass(JobOpenings);
