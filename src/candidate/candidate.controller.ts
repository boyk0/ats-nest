import { Body, Controller, Get, Post } from '@nestjs/common';
import { Candidate } from '../schemas/candidate.schema';
import { CandidateService } from './candidate.service';
import { CreateCandidateDto } from '../dto/create-candidate.dto';

@Controller('candidate')
export class CandidateController {
  constructor(private readonly candidateService: CandidateService) {}
  @Get('hi')
  async hi() {
    return 'hi';
  }

  @Post('/')
  async create(@Body() createCandidateDto: CreateCandidateDto) {
    await this.candidateService.create(createCandidateDto);
  }
}
