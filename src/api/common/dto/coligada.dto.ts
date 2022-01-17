import { ApiProperty } from '@nestjs/swagger';

export class ColigadaDto {
  @ApiProperty({ description: 'Código da Coligada', example: 1 })
  coligada: number;
}
