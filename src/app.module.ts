import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CandidateModule } from './candidate/candidate.module';
import { MongooseModule } from '@nestjs/mongoose';
import { JobOpeningsModule } from './job-openings/job-openings.module';
import { RecruiterModule } from './recruiter/recruiter.module';
import { AuthModule } from './auth/auth.module';
import * as process from 'process';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URL),
    AuthModule,
    CandidateModule,
    JobOpeningsModule,
    RecruiterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
