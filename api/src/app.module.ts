import { Module } from '@nestjs/common';
import { IncomeModule } from './income/income.module';
import { ExpensesModule } from './expenses/expenses.module';
import { BudgetModule } from './budget/budget.module';
import { GoalsModule } from './goals/goals.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './categories/categories.module';
import { AccountServicesModule } from './account-services/account-services.module';

@Module({
  imports: [IncomeModule, ExpensesModule, BudgetModule, GoalsModule, UsersModule, AuthModule, CategoriesModule, AccountServicesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
