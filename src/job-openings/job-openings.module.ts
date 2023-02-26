import { Module } from '@nestjs/common';
import { JobOpeningsController } from './job-openings.controller';
import { JobOpeningsService } from './job-openings.service';
import { MongooseModule } from '@nestjs/mongoose';
import { JobOpenings, JobOpeningsSchema } from '../schemas/job-openings.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: JobOpenings.name, schema: JobOpeningsSchema },
    ]),
  ],
  controllers: [JobOpeningsController],
  providers: [JobOpeningsService],
})
export class JobOpeningsModule {}
