import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Request,
} from '@nestjs/common';
import { JobOpeningsService } from './job-openings.service';
import { CreateJobOpeningsDto } from '../dto/create-job-openings.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { UpdateJobOpeningsDto } from '../dto/update-job-openings.dto';

@ApiTags('Job Openings')
@Controller('job-openings')
export class JobOpeningsController {
  constructor(private readonly jobOpeningsService: JobOpeningsService) {}

  @Get('/all')
  async getJobOpenings() {
    return await this.jobOpeningsService.findAll();
  }

  @Get('/analytics')
  async getAnalytics() {
    return await this.jobOpeningsService.findAll();
  }

  @Post('/')
  @ApiBody({ type: CreateJobOpeningsDto })
  async createJobOpenings(@Body() createJobOpeningsDto: CreateJobOpeningsDto) {
    await this.jobOpeningsService.create(createJobOpeningsDto);
  }

  @Get('/:id')
  async getJobOpening(@Param('id') id: string) {
    return await this.jobOpeningsService.findOneById(id);
  }

  @Patch('/:id')
  @ApiBody({ type: UpdateJobOpeningsDto })
  async updateJobOpeningsById(
    @Param('id') id: string,
    @Body() updateJobOpeningsDto: UpdateJobOpeningsDto,
  ) {
    return await this.jobOpeningsService.updateById(id, updateJobOpeningsDto);
  }
}
