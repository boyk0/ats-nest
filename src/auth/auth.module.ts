import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { RecruiterModule } from '../recruiter/recruiter.module';
import { JobOpeningsModule } from '../job-openings/job-openings.module';
import { CandidateModule } from '../candidate/candidate.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';

@Module({
  imports: [
    RecruiterModule,
    // JobOpeningsModule,
    // CandidateModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
  exports: [AuthService],
})
export class AuthModule {}
