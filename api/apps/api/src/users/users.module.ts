import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma.service';
import { UsersController } from './users.controller';
import { ExpensesService } from '../expenses/expenses.service';
import { IncomeService } from '../income/income.service';

@Module({
  providers: [UsersService, PrismaService, ExpensesService, IncomeService],
  controllers: [UsersController],
  exports: [UsersService]
})
export class UsersModule {}
