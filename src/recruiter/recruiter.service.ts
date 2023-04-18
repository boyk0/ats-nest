import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Recruiter, RecruiterDocument } from '../schemas/recruiter.schema';
import { CreateRecruiterDto } from '../dto/create-recruiter.dto';
import { UpdateRecruiterDto } from '../dto/update-recruiter.dto';

@Injectable()
export class RecruiterService {
  constructor(
    @InjectModel(Recruiter.name)
    private recruiterModel: Model<RecruiterDocument>,
  ) {}

  async create(createRecruiterDto: CreateRecruiterDto): Promise<Recruiter> {
    return await this.recruiterModel.create(createRecruiterDto);
  }

  async findAll(): Promise<Recruiter[]> {
    return await this.recruiterModel.find().exec();
  }

  async findOneById(id: string): Promise<Recruiter> {
    return await this.recruiterModel.findById(id).exec();
  }

  async deleteById(id: string) {
    return await this.recruiterModel.findByIdAndRemove({ _id: id }).exec();
  }

  async updateById(id: string, body: UpdateRecruiterDto) {
    return await this.recruiterModel.findByIdAndUpdate(id, body);
  }

  async findOneByEmail(email: string): Promise<Recruiter> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { _doc: doc } = await this.recruiterModel.findOne({ email });
    return doc;
  }
}
