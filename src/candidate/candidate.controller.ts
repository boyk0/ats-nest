import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Request,
} from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { CreateCandidateDto } from '../dto/create-candidate.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { UpdateCandidateDto } from '../dto/update-candidate.dto';
import { Public } from '../auth/decorators/public.decorator';

@ApiTags('Candidate')
@Controller('candidate')
export class CandidateController {
  constructor(private readonly candidateService: CandidateService) {}
  // @Public()
  @Get('/all')
  async getCandidates() {
    return await this.candidateService.findAll();
  }

  @Get('/analytics')
  async getAnalytics() {
    return await this.candidateService.findAll();
  }

  @Get('/searchByJobOpeningName')
  async searchByName(@Query('jobOpeningName') jobOpeningName: string) {
    return await this.candidateService.findByJobOpeningName(jobOpeningName);
  }

  @Post('/')
  @ApiBody({ type: CreateCandidateDto })
  async create(@Body() createCandidateDto: CreateCandidateDto, @Request() req) {
    const { user: recruiter } = req;
    const result = await this.candidateService.create(createCandidateDto);
    if (createCandidateDto.dateOfInterview) {
      await this.candidateService.sendInvitation(
        [createCandidateDto.email, recruiter.email],
        recruiter.email,
        createCandidateDto.name,
        createCandidateDto.dateOfInterview,
      );
    }
    return result;
  }

  @Get('/:id')
  async getCandidateById(@Param('id') id: string) {
    return await this.candidateService.findOneById(id);
  }

  @Patch('/:id')
  async updateCandidateById(
    @Param('id') id: string,
    @Body() updateCandidateDto: UpdateCandidateDto,
    @Request() req,
  ) {
    const { user: recruiter } = req;
    const initialValue = await this.getCandidateById(id);
    await this.candidateService.updateById(id, updateCandidateDto);
    if (initialValue.dateOfInterview !== updateCandidateDto.dateOfInterview) {
      await this.candidateService.sendInvitation(
        [updateCandidateDto.email, recruiter.email],
        recruiter.email,
        updateCandidateDto.name,
        updateCandidateDto.dateOfInterview,
      );
    }
  }
}
