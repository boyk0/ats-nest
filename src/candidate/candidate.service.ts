import { Injectable } from '@nestjs/common';
import { Candidate, CandidateDocument } from '../schemas/candidate.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCandidateDto } from '../dto/create-candidate.dto';
import { UpdateCandidateDto } from '../dto/update-candidate.dto';

@Injectable()
export class CandidateService {
  constructor(
    @InjectModel(Candidate.name)
    private candidateModel: Model<CandidateDocument>,
  ) {}

  async create(createCandidateDto: CreateCandidateDto): Promise<Candidate> {
    return await this.candidateModel.create(createCandidateDto);
  }

  async findAll(): Promise<Candidate[]> {
    return await this.candidateModel.find().exec();
  }

  async findOneById(id: string): Promise<Candidate> {
    return this.candidateModel.findOne({ _id: id }).exec();
  }

  async deleteById(id: string) {
    return await this.candidateModel.findByIdAndRemove({ _id: id }).exec();
  }

  async updateById(id: string, body: UpdateCandidateDto) {
    return await this.candidateModel.findByIdAndUpdate(id, body);
  }
}
