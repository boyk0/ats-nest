import { Injectable, UnauthorizedException } from '@nestjs/common';
import { RecruiterService } from '../recruiter/recruiter.service';
import { Recruiter } from '../schemas/recruiter.schema';

@Injectable()
export class AuthService {
  constructor(private recruiterService: RecruiterService) {}

  async signIn(email: string, password: string): Promise<Recruiter> {
    const recruiter = await this.recruiterService.findOneByEmail(email);

    if (recruiter?.password !== password) {
      throw new UnauthorizedException();
    }

    // TODO: Generate a JWT and return it here
    // instead of the user object
    return { ...recruiter, password: undefined };
  }
}
