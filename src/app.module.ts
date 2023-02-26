import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CandidateModule } from './candidate/candidate.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as process from 'process';

@Module({
  imports: [
    MongooseModule.forRoot(`${process.env.MONGO_URL}ats`),
    CandidateModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
