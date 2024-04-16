import { Module } from '@nestjs/common';
import { IncomeService } from './income.service';
import { IncomeController } from './income.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [IncomeController],
  providers: [IncomeService, PrismaService],
  imports: []
})
export class IncomeModule {}
