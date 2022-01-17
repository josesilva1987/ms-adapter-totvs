/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TotvsService } from 'src/api/services/totvs.service';
import { SchoolController } from './school.controller';
import { SchoolService } from './school.service';

@Module({
  imports: [],
  providers: [SchoolService, TotvsService],
  exports: [SchoolService, TotvsService],
  controllers: [SchoolController]
})
export class SchoolModule {}