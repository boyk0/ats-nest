import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { JobOpeningsService } from './job-openings.service';
import { CreateJobOpeningsDto } from '../dto/create-job-openings.dto';

@Controller('job-openings')
export class JobOpeningsController {
  constructor(private readonly jobOpeningsService: JobOpeningsService) {}

  @Get('/all')
  async getJobOpenings() {
    return await this.jobOpeningsService.findAll();
  }

  @Post('/')
  async createJobOpenings(@Body() createJobOpeningsDto: CreateJobOpeningsDto) {
    await this.jobOpeningsService.create(createJobOpeningsDto);
  }

  @Get('/:id')
  async getJobOpening(@Param('id') id: string) {
    await this.jobOpeningsService.findOneById(id);
  }

  @Patch('/:id')
  async updateJobOpeningsById(
    @Param('id') id: string,
    @Body() updateJobOpeningsDto: CreateJobOpeningsDto,
  ) {
    return await this.jobOpeningsService.updateById(id, updateJobOpeningsDto);
  }
}
