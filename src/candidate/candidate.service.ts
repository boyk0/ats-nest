import { Injectable } from '@nestjs/common';
import { Candidate, CandidateDocument } from '../schemas/candidate.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCandidateDto } from '../dto/create-candidate.dto';
import { UpdateCandidateDto } from '../dto/update-candidate.dto';
import * as qs from 'qs';
import * as process from 'process';
import axios from 'axios';
import { response } from 'express';

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

  async findByJobOpeningName(jobOpeningName: string) {
    return await this.candidateModel.find({
      jobOpening: { $regex: jobOpeningName },
    });
  }

  async getZoomToken(): Promise<string> {
    const data = qs.stringify({
      grant_type: 'account_credentials',
      account_id: process.env.ZOOM_ACCOUNT_ID,
    });

    return await axios
      .post('https://zoom.us/oauth/token', data, {
        headers: {
          Authorization: `Basic ${process.env.ZOOM_ACCOUNT_BASIC_AUTHORIZATION}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then((response) => response.data)
      .then((data) => data.access_token)
      .catch((e) => console.error(e));
  }

  async sendInvitation(
    emails: Array<string>,
    recruiterEmail: string,
    candidateName: string,
    date: string,
  ): Promise<void> {
    const token = await this.getZoomToken();

    const meeting_invitees = emails.map((email) => {
      email;
    });

    const config = {
      maxBodyLength: Infinity,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    };

    const data = {
      agenda: 'Interview',
      duration: 30,
      start_time: date,
      schedule_for: 'recruit.ats23@gmail.com',
      contact_email: recruiterEmail,
      calendar_type: 2,
      type: 2,
      topic: `Interview with ${candidateName}`,
      timezone: 'UA',
      settings: {
        approval_type: 1,
        registrants_confirmation_email: true,
        meeting_invitees,
      },
    };

    axios
      .post('https://api.zoom.us/v2/users/me/meetings', data, config)
      .then((response) => response.data)
      .catch((e) => console.error(e));
  }
}
