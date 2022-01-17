import { Module } from '@nestjs/common';
import { SchoolModule } from './modules/school/school.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    SchoolModule,
  ],
})
export class ApiModule {}
