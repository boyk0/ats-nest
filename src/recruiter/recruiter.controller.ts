import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { RecruiterService } from './recruiter.service';
import { CreateRecruiterDto } from '../dto/create-recruiter.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { UpdateRecruiterDto } from '../dto/update-recruiter.dto';

@ApiTags('Recruiter')
@Controller('recruiter')
export class RecruiterController {
  constructor(private readonly recruiterService: RecruiterService) {}

  @Get('/all')
  async getJobOpenings() {
    return await this.recruiterService.findAll();
  }

  @Post('/')
  @ApiBody({ type: CreateRecruiterDto })
  async createJobOpenings(@Body() createRecruiterDto: CreateRecruiterDto) {
    await this.recruiterService.create(createRecruiterDto);
  }

  @Get('/:id')
  async getJobOpening(@Param('id') id: string) {
    await this.recruiterService.findOneById(id);
  }

  @Patch('/:id')
  @ApiBody({ type: UpdateRecruiterDto })
  async updateJobOpeningsById(
    @Param('id') id: string,
    @Body() updateRecruiterDto: UpdateRecruiterDto,
  ) {
    return await this.recruiterService.updateById(id, updateRecruiterDto);
  }
}
