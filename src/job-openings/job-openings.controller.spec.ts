import { Test, TestingModule } from '@nestjs/testing';
import { JobOpeningsController } from './job-openings.controller';

describe('JobOpeningsController', () => {
  let controller: JobOpeningsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobOpeningsController],
    }).compile();

    controller = module.get<JobOpeningsController>(JobOpeningsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
