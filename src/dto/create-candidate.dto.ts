import { ApiProperty } from '@nestjs/swagger';

export class CreateCandidateDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  breed: string;
}
