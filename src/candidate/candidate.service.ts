import { Injectable } from '@nestjs/common';
import { Candidate, CandidateDocument } from '../schemas/candidate.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCandidateDto } from '../dto/create-candidate.dto';

@Injectable()
export class CandidateService {
  constructor(
    @InjectModel(Candidate.name)
    private candidateModel: Model<CandidateDocument>,
  ) {}

  async create(createCandidateDto: CreateCandidateDto): Promise<Candidate> {
    const createdCandidate = new this.candidateModel(createCandidateDto);
    return createdCandidate.save();
  }

  async findAll(): Promise<Candidate[]> {
    return this.candidateModel.find().exec();
  }
}
