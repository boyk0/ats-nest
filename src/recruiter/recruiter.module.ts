import { Module } from '@nestjs/common';
import { RecruiterController } from './recruiter.controller';
import { RecruiterService } from './recruiter.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Recruiter, RecruiterSchema } from '../schemas/recruiter.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Recruiter.name, schema: RecruiterSchema },
    ]),
  ],
  controllers: [RecruiterController],
  providers: [RecruiterService],
})
export class RecruiterModule {}
