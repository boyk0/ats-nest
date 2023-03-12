import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RecruiterDocument = HydratedDocument<Recruiter>;

@Schema()
export class Recruiter {
  @Prop()
  name: string;

  @Prop()
  surname: string;

  @Prop()
  email: string;

  @Prop()
  position: string;

  @Prop()
  password: string;
}

export const RecruiterSchema = SchemaFactory.createForClass(Recruiter);
