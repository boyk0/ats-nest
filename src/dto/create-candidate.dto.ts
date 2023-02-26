import { ApiProperty } from '@nestjs/swagger';

export class CreateCandidateDto {
  @ApiProperty({ required: true })
  readonly name?: string;

  @ApiProperty()
  readonly age: number;

  @ApiProperty()
  readonly breed: string;
}
