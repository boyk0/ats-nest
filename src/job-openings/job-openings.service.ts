import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  JobOpenings,
  JobOpeningsDocument,
} from '../schemas/job-openings.schema';
import { CreateJobOpeningsDto } from '../dto/create-job-openings.dto';
import { UpdateJobOpeningsDto } from '../dto/update-job-openings.dto';

@Injectable()
export class JobOpeningsService {
  constructor(
    @InjectModel(JobOpenings.name)
    private jobOpeningsModel: Model<JobOpeningsDocument>,
  ) {}

  async create(
    createJobOpeningDto: CreateJobOpeningsDto,
  ): Promise<JobOpenings> {
    return await this.jobOpeningsModel.create(createJobOpeningDto);
  }

  async findAll(): Promise<JobOpenings[]> {
    return await this.jobOpeningsModel.find().exec();
  }

  async findOneById(id: string): Promise<JobOpenings> {
    return this.jobOpeningsModel.findOne({ _id: id }).exec();
  }

  async deleteById(id: string) {
    return await this.jobOpeningsModel.findByIdAndRemove({ _id: id }).exec();
  }

  async updateById(id: string, body: UpdateJobOpeningsDto) {
    return await this.jobOpeningsModel.findByIdAndUpdate(id, body);
  }
}
