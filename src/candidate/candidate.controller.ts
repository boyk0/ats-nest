import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { CreateCandidateDto } from '../dto/create-candidate.dto';

@Controller('candidate')
export class CandidateController {
  constructor(private readonly candidateService: CandidateService) {}
  @Get('/all')
  async getCandidates() {
    return await this.candidateService.findAll();
  }

  @Post('/')
  async create(@Body() createCandidateDto: CreateCandidateDto) {
    await this.candidateService.create(createCandidateDto);
  }

  @Get('/:id')
  async getCandidateById(@Param('id') id: string) {
    return await this.candidateService.findOneById(id);
  }

  @Patch('/:id')
  async updateCandidateById(
    @Param('id') id: string,
    @Body() updateCandidateDto: CreateCandidateDto,
  ) {
    return await this.candidateService.updateById(id, updateCandidateDto);
  }
}
