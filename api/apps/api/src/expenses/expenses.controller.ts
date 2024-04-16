import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { Prisma } from '@prisma/client';

@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Post()
  create(@Body() createIncomeDto: Prisma.ExpensesCreateInput) {
    return this.expensesService.create(createIncomeDto);
  }

  @Get()
  findAll(
    @Query('skip') skip?: string,
    @Query('take') take?: string,
    @Query('where') where?: string,
    @Query('start') start?: string,
    @Query('end') end?: string,
    @Query('category') category?: string,
    @Query('user') user?: string,
  ) {
    let find: any = {};
    if (category) find.categoryId = category;
    if (start) find.date.gte = new Date(start);
    if (end) find.date.lte = new Date(end);
    if (user) find.userId = user;
    if (!take) take = 100 as any;
    if (!skip) skip = 0 as any;
    if (!user) return [];

    return this.expensesService.findAll({
      skip: +skip,
      take: +take,
      where: find,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.expensesService.findOne({
      id,
    });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateIncomeDto: Prisma.IncomesUpdateInput,
  ) {
    return this.expensesService.update({
      data: updateIncomeDto,
      where: {
        id,
      },
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.expensesService.remove({
      id,
    });
  }
}
