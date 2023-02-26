import { ApiProperty } from '@nestjs/swagger';

export class CreateRecruiterDto {
  @ApiProperty({ required: true })
  readonly name?: string;

  @ApiProperty()
  readonly age: number;

  @ApiProperty()
  readonly breed: string;
}
