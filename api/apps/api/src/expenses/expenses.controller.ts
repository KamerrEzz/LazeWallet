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
    console.log(start, end);

    let find: any = {};
    if (category) find.categoryId = category;
    if (!find.date) find.date = {};
    if (start) find.date.gte = start;
    if (end) find.date.lte = end;
    if (user) find.userId = user;
    if (!take) take = 100 as any;
    if (!skip) skip = 0 as any;
    if (!user) return [];

    console.log({ find });

    return this.expensesService.findAll({
      skip: +skip,
      take: +take,
      where: find,
      orderBy: {
        date: 'desc',
      },
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
