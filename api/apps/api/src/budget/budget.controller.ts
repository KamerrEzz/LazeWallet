import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { BudgetService } from './budget.service';
import { Prisma } from '@prisma/client';

@Controller('budgets')
export class BudgetController {
  constructor(private readonly budgetService: BudgetService) {}

  @Post()
  create(@Body() createBudgetDto: Prisma.BudgetsCreateInput) {
    return this.budgetService.create(createBudgetDto);
  }

  @Get()
  findAll(
    @Query('skip') skip?: string,
    @Query('take') take?: string,
    @Query('user') user?: string,
  ) {
    let find: any = {};
    if (user) find.userId = user;
    if (!take) take = 100 as any;
    if (!skip) skip = 0 as any;
    if (!user) return [];
    return this.budgetService.findAll({
      skip: +skip,
      take: +take,
      where: find,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.budgetService.findOne({
      id,
    });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBudgetDto: Prisma.BudgetsUpdateInput,
  ) {
    return this.budgetService.update({
      where: {
        id,
      },
      data: updateBudgetDto,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.budgetService.remove({
      id,
    });
  }
}
