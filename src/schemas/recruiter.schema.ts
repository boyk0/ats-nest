import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RecruiterDocument = HydratedDocument<Recruiter>;

@Schema()
export class Recruiter {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const RecruiterSchema = SchemaFactory.createForClass(Recruiter);
