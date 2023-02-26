import { Test, TestingModule } from '@nestjs/testing';
import { JobOpeningsService } from './job-openings.service';

describe('JobOpeningsService', () => {
  let service: JobOpeningsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobOpeningsService],
    }).compile();

    service = module.get<JobOpeningsService>(JobOpeningsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
